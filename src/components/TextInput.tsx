import type { PropsWithChildren } from "react";
import {
	type FieldValues,
	useController,
	type UseControllerProps,
	useFormContext,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
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
}: TextInputProps<T>) => {
	const { t } = useTranslation("formTranslation");
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div data-testid={test_id} className="w-full h-full flex flex-col">
			<label
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{t(`${name}.label`)}
			</label>
			<input
				{...register(name)}
				type={type}
				placeholder={t(`${name}.placeholder`)}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<ErrorMessage errors={errors} name={name} />
		</div>
	);
};
