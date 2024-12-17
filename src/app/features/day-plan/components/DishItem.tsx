import { DragBoxTypes, type DishType } from "../types";
import { DragBox } from "./DragBox";
import { Dropbox } from "./DropBox";

type DishItemProps = {
	index: number;
	onInsert: (item: any, index: number) => void;
	disabledInsert?: boolean;
	onDelete: (id: string) => void;
} & DishType;

export const DishItem = ({
	index,
	id,
	title,
	onInsert,
	disabledInsert = false,
	onDelete,
}: DishItemProps) => {
	return (
		<>
			{index === 0 && (
				<Dropbox
					accept={
						disabledInsert ? [] : [DragBoxTypes.RECIPE, DragBoxTypes.DISH]
					}
					onDrop={(item) => {
						onInsert(item, 0);
					}}
					className="  p-1  rounded-md"
				/>
			)}

			<DragBox
				id={id}
				type="DISH"
				className=" flex justify-between"
				disableDrag={disabledInsert}
			>
				<div className=" bg-orange-200 rounded-full w-12 basis-12 p-2 text-center align-middle text-sm text-slate-700">
					{index + 1}
				</div>
				<div className=" basis-full align-middle p-2 rounded-md bg-orange-200 mx-2">
					{title}
				</div>
				<div className=" basis-12 bg-orange-200 rounded-full px-3 py-2 text-sm relative">
					Controllers
					<div
						className="absolute top-0 right-0 cursor-pointer"
						onClick={() => onDelete(id)}
						onKeyUp={() => onDelete(id)}
					/>
				</div>
			</DragBox>

			<Dropbox
				accept={disabledInsert ? [] : [DragBoxTypes.RECIPE, DragBoxTypes.DISH]}
				onDrop={(item) => {
					onInsert(item, index + 1);
				}}
				className="  p-1  rounded-md"
			/>
		</>
	);
};
