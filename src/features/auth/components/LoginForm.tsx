import { useTranslation } from "react-i18next";
import { TextInput } from "@components/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@services/auth";
import { useDispatch } from "react-redux";
import { setCredentials } from "../authSlice";
import { useNavigate, useSearchParams } from "react-router";
const loginSchema = z.object({
	email: z
		.string({
			message: "emailInvalid",
		})
		.email({
			message: "emailInvalid",
		}),
	password: z.string().min(6, {
		message: "passwordMin",
	}),
});
export type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { t } = useTranslation("formTranslation");
	const [login] = useLoginMutation();
	const methods = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = methods.handleSubmit(async (data) => {
		try {
			const user = await login(data).unwrap();
			dispatch(setCredentials(user));
			const redirectTo = searchParams.get("redirectTo");
			navigate(redirectTo || "/");
		} catch (err) {
			return {
				message: "loginError",
			};
		}
	});

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={onSubmit}
				className="flex flex-col w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800">
					{t("login")}
				</h2>

				<TextInput name="email" type="email" />
				<TextInput name="password" type="password" />
				<button
					type="submit"
					className={`w-full py-2 text-white rounded-lg ${"bg-blue-500 hover:bg-blue-600"}`}
				>
					{t("login")}
				</button>
			</form>
		</FormProvider>
	);
}
