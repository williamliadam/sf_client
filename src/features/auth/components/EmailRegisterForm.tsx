import type React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { TextInput } from "@components/TextInput";
import EmailVerifyInput from "@components/EmailVerifyInput";
import { useSignupMutation, useVerifyEmailMutation } from "@services/auth";
import { useToast } from "@components/ToastProvider";
import { useDispatch } from "react-redux";
import { setCredentials } from "../authSlice";
import { useNavigate } from "react-router";

const schema = z
	.object({
		email: z.string().email({ message: "emailInvalid" }),
		password: z.string().min(6, { message: "passwordMin" }),
		confirmPassword: z.string().min(6, { message: "passwordMin" }),
		verificationCode: z.string().min(6, { message: "verificationCodeMin" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "passwordsNotMatch",
		path: ["confirmPassword"],
	});

type FormData = z.infer<typeof schema>;

const EmailRegisterForm: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [verifyEmail] = useVerifyEmailMutation();
	const [register] = useSignupMutation();
	const { addToast } = useToast();
	const methods = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
			verificationCode: "",
		},
	});

	const onSubmit = methods.handleSubmit(async (data) => {
		try {
			await register({
				email: data.email,
				password: data.password,
				code: data.verificationCode,
			}).unwrap();
			navigate("/login");
			addToast("Register success", "success");
		} catch (err) {
			return {
				message: "registerError",
			};
		}
	});

	const handleSendVerificationCode = async () => {
		try {
			await verifyEmail({
				email: methods.getValues("email"),
			}).unwrap();
		} catch (err: any) {
			addToast(err.data.message, "error");
		}
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={onSubmit}
				className="flex flex-col w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
			>
				<h2 className="text-2xl font-bold mb-4">{t("register")}</h2>
				<EmailVerifyInput
					name="email"
					onSendVerificationCode={handleSendVerificationCode}
				/>
				<TextInput name="verificationCode" />
				<TextInput name="password" type="password" />
				<TextInput name="confirmPassword" type="password" />
				<button type="submit" className="btn">
					{t("register")}
				</button>
			</form>
		</FormProvider>
	);
};

export default EmailRegisterForm;
