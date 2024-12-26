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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="white"
					>
						<title>Delete</title>
						<path d="M3 6l3 18h12l3-18h-18zm16.5 2l-1.5 14h-10l-1.5-14h13zm-10.5-4v-2h6v2h5v2h-16v-2h5zm2 4h2v10h-2v-10zm4 0h2v10h-2v-10zm-8 0h2v10h-2v-10z" />
					</svg>
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
