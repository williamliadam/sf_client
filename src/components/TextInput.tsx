import type { FC, PropsWithChildren } from "react";
import {
	type FieldValues,
	useController,
	type UseControllerProps,
} from "react-hook-form";
import { useTranslation } from "react-i18next";

type TextInputProps<T extends FieldValues> = PropsWithChildren<
	{
		test_id?: string;
		type?: "text" | "password" | "email" | "number" | "tel" | "url";
		placeholder?: string;
	} & UseControllerProps<T>
>;

export const TextInput = <T extends FieldValues>({
	test_id,
	name,
	type = "text",
	control,
}: TextInputProps<T>) => {
	const { t } = useTranslation("formTranslation");
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
	});
	return (
		<div data-testid={test_id} className="w-full h-full flex flex-col">
			<label
				htmlFor={field.name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{t(`${field.name}.label`)}
			</label>
			<input
				{...field}
				type={type}
				autoComplete="on"
				placeholder={t(`${field.name}.placeholder`)}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			{error?.message && (
				<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					{t(error.message)}
				</p>
			)}
		</div>
	);
};
