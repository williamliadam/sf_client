import { ErrorBoundary } from "@components/ErrorBoundary";
import { Loading } from "@components/Loading";
import EmailRegisterForm from "@features/auth/components/EmailRegisterForm";
import { Suspense } from "react";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
	const navigate = useNavigate();

	const handleBackToLogin = () => {
		navigate("/login");
	};
	const handleNavigateToHome = () => {
		navigate("/");
	};
	return (
		<Suspense fallback={<Loading />}>
			<ErrorBoundary>
				<div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
					<EmailRegisterForm />
					<div className="flex justify-end w-full max-w-md gap-2">
						<button
							type="button"
							onClick={handleBackToLogin}
							className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Back to Login
						</button>
						<button
							type="button"
							onClick={handleNavigateToHome}
							className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Go to Home
						</button>
					</div>
				</div>
			</ErrorBoundary>
		</Suspense>
	);
};
