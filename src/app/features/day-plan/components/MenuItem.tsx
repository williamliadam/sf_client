import { TiDelete } from "react-icons/ti";
import { DishItem } from "./DishItem";
import { DragBox } from "./DragBox";
import { DragBoxTypes, type MenuType } from "../types";
import { Dropbox } from "./DropBox";
import { useState } from "react";
import { useOutsideClick } from "@app/utils/useOutsideClick";

type MenuItemProps = {
	index: number;
	onDelete: (id: string) => void;
	onDeleteDish?: (menuId: string, dishId: string) => void;
	onInsert?: (item: any, menuId: string, index: number) => void;
	disabledInsert?: boolean;
	onNameChange?: (name: string) => void;
} & MenuType;
export const MenuItem = ({
	id,
	name,
	dishes,
	onDelete,
	onInsert,
	disabledInsert = false,
	onNameChange,
	onDeleteDish,
}: MenuItemProps) => {
	const [titleEditing, setTitleEditing] = useState(false);

	const ref = useOutsideClick<HTMLInputElement>(() => {
		setTitleEditing(false);
	});
	return (
		<DragBox
			id={id}
			type="MENU"
			className=" bg-orange-200 p-2 rounded-md shadow-md flex flex-col gap-2"
		>
			<div className=" bg-orange-300 rounded-md p-2 shadow-sm flex justify-between items-center">
				{titleEditing ? (
					<input
						value={name}
						onChange={(e) => {
							if (onNameChange) {
								onNameChange(e.target.value);
							}
						}}
						ref={ref}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === "Escape") {
								setTitleEditing(false);
							}
						}}
					/>
				) : (
					<div
						className=" cursor-pointer min-w-4 min-h-4"
						onDoubleClick={() => {
							setTitleEditing(true);
						}}
					>
						{name}
					</div>
				)}
				<TiDelete
					className=" btn"
					size={24}
					onClick={() => {
						onDelete(id);
					}}
				/>
			</div>
			{dishes?.length > 0 ? (
				<div className=" bg-orange-300 rounded-md p-2 shadow-sm flex flex-col">
					{dishes.map((dish, index) => (
						<DishItem
							key={dish.id}
							disabledInsert={disabledInsert}
							index={index}
							{...dish}
							onInsert={(item, index) => {
								if (onInsert) {
									onInsert(item, id, index);
								}
							}}
							onDelete={(dishId) => {
								if (onDeleteDish) {
									onDeleteDish(id, dishId);
								}
							}}
						/>
					))}
				</div>
			) : (
				<Dropbox
					accept={[DragBoxTypes.RECIPE]}
					onDrop={() => {}}
					className="rounded-md h-8  flex justify-center items-center"
				/>
			)}
		</DragBox>
	);
};
