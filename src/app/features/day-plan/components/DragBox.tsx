import type { PropsWithChildren } from "react";
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
	if (disableDrag) {
		return <div className={className}>{children}</div>;
	}
	return isDragging ? (
		<div className={`${className} opacity-50`} ref={dragPreview}>
			{children}
		</div>
	) : (
		<div className={className} ref={drag}>
			{children}
		</div>
	);
};
