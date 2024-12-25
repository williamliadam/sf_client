import type { FC, PropsWithChildren } from "react";
import { FiLoader } from "react-icons/fi";

type LoadingProps = PropsWithChildren<{
	test_id?: string;
}>;

export const Loading: FC<LoadingProps> = ({ test_id }) => {
	return (
		<div data-testid={test_id} className=" w-full h-full flex justify-center items-center">
			<FiLoader className=" animate-spin text-4xl text-blue-500" />
		</div>
	);
};
