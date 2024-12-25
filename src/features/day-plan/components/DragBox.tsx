import type { PropsWithChildren, Ref } from "react";
import { useDrag } from "react-dnd";
import type { DragBoxTypes } from "../types";

type DragBoxProps = {
	id: string;
	type: keyof typeof DragBoxTypes;
	className?: string;
	disableDrag?: boolean;
} & PropsWithChildren;
export const DragBox = ({
	id,
	type,
	children,
	className,
	disableDrag = false,
}: DragBoxProps) => {
	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		type: type,
		item: { id, type },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const baseClass =
		"p-4 rounded-md shadow-md transition-transform transform hover:scale-105";
	const draggingClass = "opacity-50";
	const combinedClass = `${baseClass} ${className} ${isDragging ? draggingClass : ""}`;

	if (disableDrag) {
		return <div className={combinedClass}>{children}</div>;
	}

	return isDragging ? (
		<div
			className={combinedClass}
			ref={dragPreview as unknown as Ref<HTMLDivElement>}
		>
			{children}
		</div>
	) : (
		<div className={combinedClass} ref={drag as unknown as Ref<HTMLDivElement>}>
			{children}
		</div>
	);
};
