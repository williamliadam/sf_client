import type { FC } from "react";
import { useTranslation } from "react-i18next";

type LanguageSwitchProps = {
	value: boolean;
	onChange: (state: boolean) => void;
};

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
	value,
	onChange,
}) => {
	const { t } = useTranslation();
	return (
		<div
			tabIndex={0}
			className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
				value ? "bg-gradient-to-r from-green-400 to-green-600" : "bg-gray-300"
			}`}
			onClick={() => {
				onChange(!value);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					onChange(!value);
				}
			}}
			role="switch"
			aria-checked={value}
		>
			<div
				className={`bg-white w-6 h-6 text-center flex justify-center items-center rounded-full shadow-md transform transition-transform duration-300 ${
					value ? "translate-x-6" : "translate-x-0"
				}`}
			>
				<span className="text-xs/[5px]">
					{value ? t("language.en") : t("language.zh")}
				</span>
			</div>
		</div>
	);
};
