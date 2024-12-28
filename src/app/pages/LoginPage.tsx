import { LoginForm } from "@features/auth/components/LoginForm";
import { useNavigate } from "react-router";

const LoginPage = () => {
	const navigate = useNavigate();

	const handleNavigateToRegister = () => {
		navigate("/register");
	};
	const handleNavigateToHome = () => {
		navigate("/");
	};
	return (
		<div className=" flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
			<LoginForm />
			<div className="flex justify-end w-full max-w-md gap-2">
				<button
					type="button"
					onClick={handleNavigateToRegister}
					className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Go to Register
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
	);
};

export default LoginPage;
