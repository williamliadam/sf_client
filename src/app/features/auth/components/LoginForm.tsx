import { useTransition } from "react";
import { useLoginFormState } from "./LoginFormAction";

export const LoginForm = () => {
	const [state, formAction] = useLoginFormState();
	const [isPending, startTransition] = useTransition();
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				startTransition(() =>
					formAction(new FormData(event.target as HTMLFormElement)),
				);
			}}
			className=" flex flex-col w-60"
		>
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
