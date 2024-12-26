import { useDispatch, useSelector } from "react-redux";
import {
	deleteDishFromMenu,
	deleteMenu,
	insertDishToMenu,
	insertRecipeToMenu,
	moveRecipeToMenu,
	selectMenus,
	updateMenu,
} from "./slices/dayPlanSlice";
import { DragBox } from "./components/DragBox";
import { Dropbox } from "./components/DropBox";
import { MenuItem } from "./components/MenuItem";
import { DragBoxTypes } from "./types";
import { Loading } from "@components/Loading";
import { TiPlus } from "react-icons/ti";
import { useMineRecipesQuery } from "@services/dayPlan";
import { useTranslation } from "react-i18next";

export const DayPlanView = () => {
	const dispatch = useDispatch();
	const menus = useSelector(selectMenus);
	const { data: recipes, isLoading } = useMineRecipesQuery();
	const { t } = useTranslation("dayPlan");

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
			<div className="flex w-full max-w-5xl gap-6">
				<div className="bg-white p-4 rounded-md shadow-lg w-1/3 flex flex-col gap-4">
					<h2 className="text-2xl font-semibold text-gray-800">
						{t("recipes")}
					</h2>
					{recipes?.map((recipe) => (
						<DragBox
							key={recipe.id}
							id={recipe.id}
							type="RECIPE"
							className="flex justify-between items-center p-4 rounded-md shadow-md bg-blue-200 hover:bg-blue-300 transition"
						>
							<div className="flex-1 text-gray-800 font-semibold">
								{recipe.name}
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="white"
							>
								<title>Drag</title>
								<path d="M10 4v-4h4v4h5v2h-14v-2h5zm-7 6h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2z" />
							</svg>
						</DragBox>
					))}
				</div>
				<div className="bg-white p-4 rounded-md shadow-lg w-2/3 flex flex-col gap-4">
					<h2 className="text-2xl font-semibold text-gray-800">{t("menus")}</h2>
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
							const recipe = recipes?.find((r) => r.id === item.id);
							if (recipe) {
								dispatch(moveRecipeToMenu({ recipe }));
							}
						}}
						className="flex items-center justify-center  border-2 border-dashed border-gray-400 rounded-md p-4 hover:bg-gray-200 transition"
					>
						<TiPlus className="text-4xl text-gray-800" />
					</Dropbox>
				</div>
			</div>
		</div>
	);
};
