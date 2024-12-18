import { useActionState } from 'react';
import { z } from 'zod';

const logingSchema = z.object({
  email: z.string({
    message: "emailInvalid",
  }).email({
    message: "emailInvalid",
  }),
  password: z.string({
    message: "passwordMin",
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
      message: 'loginError'
    };
  }
  return {
    message: 'loginSuccess',
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