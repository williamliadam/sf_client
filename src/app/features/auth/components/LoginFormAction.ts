import { useActionState } from 'react';
import { z } from 'zod';

const logingSchema = z.object({
  email: z.string({
    message: "Please enter a valid email address",
  }).email({
    message: "Please enter a valid email address",
  }),
  password: z.string({
    message: "Password must be at least 6 characters",
  }).min(6),
});
export type LoginFormActionType = z.infer<typeof logingSchema>;
export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
export const LoginFormAction = async (previousState: State, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const validatedFields = logingSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or incorrect fields. Failed to Login.'
    };
  }
  return {
    message: 'Login successfully.'
  };
}
const initialState = { message: '', errors: {} };
export const useLoginFormState = () => {
  const [state, formAction, isPending] = useActionState(
    LoginFormAction,
    initialState // initial state
  );

  return [state, formAction, isPending] as const;
}