import { useLoginFormState } from "./LoginFormAction";

export const LoginForm = () => {
	const [state, formAction, isPending] = useLoginFormState();
	return (
		<form action={formAction} className=" flex flex-col w-60">
			{isPending ? <div>Loading...</div> : state.message}
			<input type="email" name="email" placeholder="Email" />
			{state.errors?.email}
			<input type="password" name="password" placeholder="Password" />
      {state.errors?.password}
			<button type="submit" disabled={isPending}>
				{isPending ? "Loading..." : "Login"}
			</button>
		</form>
	);
};
