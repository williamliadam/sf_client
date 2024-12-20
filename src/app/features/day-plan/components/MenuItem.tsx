import { TiDelete } from "react-icons/ti";
import { DishItem } from "./DishItem";
import type { MenuType } from "../types";
import { type ChangeEvent, useState } from "react";
import { useOutsideClick } from "@app/utils/useOutsideClick";
import { useDebounceFn } from "ahooks";

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
	const [title, setTitle] = useState(name);
	const ref = useOutsideClick<HTMLInputElement>(() => {
		setTitleEditing(false);
		if (title !== name) {
			onNameChange?.(title);
		}
	});

	return (
		<div className="bg-white p-4 rounded-md shadow-lg flex flex-col gap-4">
			<div className="bg-gray-100 rounded-md p-4 shadow-sm flex justify-between items-center">
				{titleEditing ? (
					<input
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						ref={ref}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === "Escape") {
								setTitleEditing(false);
								if (e.key === "Enter") {
									onNameChange?.(title);
								} else {
									setTitle(name);
								}
							}
						}}
						className="p-2 rounded-md border border-gray-300"
					/>
				) : (
					<div
						className="cursor-pointer text-lg font-semibold"
						onDoubleClick={() => {
							setTitleEditing(true);
						}}
					>
						{name}
					</div>
				)}
				<TiDelete
					className="text-red-500 cursor-pointer hover:text-red-700 transition"
					size={24}
					onClick={() => {
						onDelete(id);
					}}
				/>
			</div>
			{dishes?.length > 0 ? (
				<div className="bg-gray-100 rounded-md p-4 shadow-sm flex flex-col gap-2">
					{dishes.map((dish, index) => (
						<DishItem
							key={dish.id}
							disabledInsert={disabledInsert}
							index={index}
							{...dish}
							onInsert={(item, idx) => onInsert?.(item, id, idx)}
							onDelete={(dishId) => onDeleteDish?.(id, dishId)}
						/>
					))}
				</div>
			) : (
				<div className="text-center text-gray-500">No dishes available</div>
			)}
		</div>
	);
};
