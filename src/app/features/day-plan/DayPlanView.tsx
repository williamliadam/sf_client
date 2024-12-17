import { useDispatch, useSelector } from "react-redux";
import {
	addMenuToDayPlan,
	deleteDishFromMenu,
	deleteMenu,
	deleteMenuFromDayPlan,
	insertDishToMenu,
	insertRecipeToMenu,
	moveRecipeToMenu,
	selectDayPlan,
	selectMenus,
	updateMenu,
} from "./slices/dayPlanSlice";
import { TiPlus } from "react-icons/ti";
import { DragBox } from "./components/DragBox";
import { Dropbox } from "./components/DropBox";
import { MenuItem } from "./components/MenuItem";
import { DragBoxTypes } from "./types";
import { useMineRecipesQuery } from "./slices/dayPlanSliceApi";
import { Loading } from "@app/components/Loading";

export const DayPlanView = () => {
	const dispatch = useDispatch();
	const dayPlan = useSelector(selectDayPlan);

	const menus = useSelector(selectMenus);
	const { data: recipes, isLoading } = useMineRecipesQuery();

	return (
		<section className=" h-full w-full bg-orange-200 flex-1 gap-5 flex ">
			<div className=" bg-orange-100 h-full w-1/3 p-2 flex flex-col justify-start rounded-md gap-2">
				{isLoading && <Loading />}
				{recipes?.map((recipe) => (
					<DragBox
						key={recipe.id}
						id={recipe.id}
						type="RECIPE"
						className=" bg-orange-200 p-2 rounded-md shadow-md"
					>
						{recipe.name}
					</DragBox>
				))}
			</div>
			<div className="bg-orange-100 h-full w-1/3 p-2 rounded-md flex flex-col justify-start gap-2">
				{menus.map((menu, index) => (
					<MenuItem
						key={menu.id}
						index={index}
						{...menu}
						onNameChange={(name) => {
							dispatch(updateMenu({ id: menu.id, name }));
						}}
						onDelete={(id) => {
							dispatch(deleteMenu(id));
						}}
						onInsert={(item, menuId, index) => {
							if (item.type === DragBoxTypes.RECIPE) {
								const recipe = recipes?.find((r) => r.id === item.id);
								if (recipe) {
									dispatch(insertRecipeToMenu({ recipe, menuId, index }));
								}
							} else if (item.type === DragBoxTypes.DISH) {
								const dish = menu.dishes?.find((d) => d.id === item.id);
								if (dish) {
									dispatch(deleteDishFromMenu({ dishId: dish.id, menuId }));
									dispatch(insertDishToMenu({ dish, menuId, index }));
								}
							}
						}}
						onDeleteDish={(menuId, dishId) => {
							dispatch(deleteDishFromMenu({ dishId, menuId }));
						}}
					/>
				))}
				<Dropbox
					accept={[DragBoxTypes.RECIPE]}
					onDrop={(item) => {
						console.log("item:", item);
						const recipe = recipes?.find((r) => r.id === item.id);
						if (recipe) {
							dispatch(moveRecipeToMenu({ recipe }));
						}
					}}
					className="rounded-md h-8 mt-2 flex justify-center items-center"
				>
					<TiPlus size={24} />
				</Dropbox>
			</div>
			<Dropbox
				accept={[DragBoxTypes.MENU]}
				onDrop={(item) => {
					if (item.type === DragBoxTypes.MENU) {
						const menu = menus.find((m) => m.id === item.id);
						if (menu) {
							dispatch(addMenuToDayPlan(menu));
						}
					}
				}}
				className=" bg-orange-100 h-full w-1/3 p-2 rounded-md"
			>
				{dayPlan.menus.map((menu, index) => (
					<MenuItem
						disabledInsert
						key={menu.id}
						index={index}
						{...menu}
						onDelete={(id) => {
							dispatch(deleteMenuFromDayPlan(id));
						}}
					/>
				))}
			</Dropbox>
		</section>
	);
};
