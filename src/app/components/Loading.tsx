import { FiLoader } from "react-icons/fi";

export const Loading = () => {
	return (
		<div className=" w-full h-full flex justify-center items-center">
			<FiLoader className=" animate-spin text-4xl text-blue-500" />
		</div>
	);
};
