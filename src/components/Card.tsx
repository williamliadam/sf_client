import type { FC, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
	test_id?: string;
}>;

export const Loading: FC<CardProps> = ({ test_id }) => {
	return (
		<div data-testid={test_id} className=" w-full h-full flex justify-center items-center">
			This is Card Component
		</div>
	);
};
