import type { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

type TextInputProps = PropsWithChildren<{
	test_id?: string;
	type?: "text" | "password" | "email" | "number" | "tel" | "url";
	placeholder?: string;
	message?: string[];
	id: string;
}>;

export const TextInput: FC<TextInputProps> = ({
	test_id,
	id,
	type = "text",
	message,
}) => {
	const { t } = useTranslation("formTranslation");

	return (
		<div data-testid={test_id} className="w-full h-full flex flex-col">
			<label
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{t(`${id}.label`)}
			</label>
			<input
				id={id}
				type={type}
				name={id}
				autoComplete="on"
				placeholder={t(`${id}.placeholder`)}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			{message && (
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					{t(message)}
				</p>
			)}
		</div>
	);
};
