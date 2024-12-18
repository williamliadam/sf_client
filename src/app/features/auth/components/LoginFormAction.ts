import { useLoginMutation } from '@app/services/auth';
import { useActionState } from 'react';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { setCredentials } from '../authSlice';
import { useNavigate } from 'react-router';


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
export const LoginFormAction = async (previousState: State, formData: FormData, login: any) => {
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
  const result = await login(validatedFields.data)
  if (result) {
    return result
  }
  return {
    message: 'loginSuccess',
  };
}
const initialState = { message: '', errors: {} };
export const useLoginFormState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation()
  const loginHandler = async (formState: LoginFormActionType) => {
    try {
      const user = await login(formState).unwrap()
      dispatch(setCredentials(user))
      navigate('/')
    } catch (err) {
      console.error(err)
      return {
        message: 'loginError'
      }
    }
  }
  const [state, formAction, isPending] = useActionState(
    (previousState: State, formData: FormData) => LoginFormAction(previousState, formData, loginHandler),
    initialState // initial state
  );

  return [state, formAction, isPending] as const;
}