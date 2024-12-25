import type { FC } from "react";

type SwitchProps = {
	test_id?: string;
	value?: boolean;
	onChange?: (state: boolean) => void;
};

export const Switch: FC<SwitchProps> = ({
	test_id,
	value = false,
	onChange,
}) => {
	return (
		<div
			data-testid={test_id}
			tabIndex={0}
			className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
				value ? "bg-gradient-to-r from-green-400 to-green-600" : "bg-gray-300"
			}`}
			onClick={() => {
				onChange?.(!value);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					onChange?.(!value);
				}
			}}
			role="switch"
			aria-checked={value}
		>
			<div
				className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
					value ? "translate-x-6" : "translate-x-0"
				}`}
			/>
		</div>
	);
};
