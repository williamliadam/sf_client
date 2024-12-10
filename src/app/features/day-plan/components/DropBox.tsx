import { memo, type PropsWithChildren } from "react";
import { useDrop } from "react-dnd";

type DropBoxProps = {
	accept: string[];
	onDrop: (item: any) => void;
	className?: string;
} & PropsWithChildren;

export const Dropbox = memo(
	({ children, accept, onDrop, className }: DropBoxProps) => {
		const [{ isOver, canDrop }, drop] = useDrop({
			accept,
			drop: onDrop,
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		});
		let backgroundColor = "";
		if (isOver) {
			backgroundColor = "bg-orange-500";
		} else if (canDrop) {
			backgroundColor = "bg-orange-200";
		}
		return (
			<div className={`${className} ${backgroundColor}`} ref={drop}>
				{children}
			</div>
		);
	},
);
