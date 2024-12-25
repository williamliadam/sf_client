import type { FC } from "react";
import { DragBoxTypes, type DishType } from "../types";
import { DragBox } from "./DragBox";
import { Dropbox } from "./DropBox";

type DishItemProps = {
	index: number;
	onInsert: (item: any, index: number) => void;
	disabledInsert?: boolean;
	onDelete: (id: string) => void;
} & DishType;

export const DishItem: FC<DishItemProps> = ({
	id,
	index,
	title,
	disabledInsert = false,
	onInsert,
	onDelete,
}) => {
	return (
		<>
			{!disabledInsert && index === 0 && (
				<Dropbox
					accept={[DragBoxTypes.RECIPE, DragBoxTypes.DISH]}
					onDrop={(item) => {
						onInsert(item, 0);
					}}
					className="  hover:bg-gray-200 transition py-1"
				/>
			)}

			<DragBox
				id={id}
				type="DISH"
				className="flex justify-between items-center p-4 rounded-md shadow-md bg-white hover:bg-gray-100 transition"
				disableDrag={disabledInsert}
			>
				<div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">
					{index + 1}
				</div>
				<div className="flex-1 mx-4 p-2 rounded-md bg-blue-100 text-center text-blue-800 font-semibold">
					{title}
				</div>
				<div
					className="bg-red-500 text-white rounded-full px-3 py-2 text-sm relative flex items-center justify-center cursor-pointer hover:bg-red-600 transition"
					onClick={() => onDelete(id)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							onDelete(id);
						}
					}}
				>
					<span className="material-icons">delete</span>
				</div>
			</DragBox>

			{!disabledInsert && (
				<Dropbox
					accept={[DragBoxTypes.RECIPE, DragBoxTypes.DISH]}
					onDrop={(item) => {
						onInsert(item, index + 1);
					}}
					className="    hover:bg-gray-200 transition py-1"
				/>
			)}
		</>
	);
};
