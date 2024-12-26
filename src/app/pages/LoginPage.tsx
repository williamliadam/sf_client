import { ErrorBoundary } from "@components/ErrorBoundary";
import { Loading } from "@components/Loading";
import { LoginView } from "@features/auth/LoginView";
import { Suspense } from "react";

export const LoginPage = () => {
	return (
		<Suspense fallback={<Loading />}>
			<ErrorBoundary>
				<div className=" flex justify-center items-center w-full h-screen">
					<LoginView />
				</div>
			</ErrorBoundary>
		</Suspense>
	);
};
