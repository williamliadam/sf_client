import { memo, type PropsWithChildren } from "react";
import { useDrop } from "react-dnd";

type DropBoxProps = {
	accept: string[];
	onDrop: (item: any) => void;
	className?: string;
	showOnlyCanDrop?: boolean;
} & PropsWithChildren;

export const Dropbox = memo(
	({ children, accept, onDrop, className, showOnlyCanDrop = false }: DropBoxProps) => {
		const [{ isOver, canDrop }, drop] = useDrop({
			accept,
			drop: onDrop,
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		});
		let backgroundColor = "";
		let visible = "";
		if (isOver) {
			backgroundColor = "bg-blue-500";
		} else if (canDrop) {
			backgroundColor = "bg-blue-200";
		} else {
			backgroundColor = "bg-gray-100";
			if(showOnlyCanDrop) {
				 visible = "hidden";
			}
		}
		const baseClass =
			"rounded-md shadow-md border-2 border-dashed transition-colors duration-300";
		const combinedClass = `${baseClass} ${className} ${backgroundColor} ${visible}`;

		return (
			<div className={combinedClass} ref={drop}>
				{children}
			</div>
		);
	},
);
