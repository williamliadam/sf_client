import { Routes, Route } from "react-router";
import { HomeLayout } from "@layouts/HomeLayout";
import { DayPlanPage } from "./pages/DayPlanPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NoMatchPage } from "./pages/NoMatchPage";
import { ProtectedRoute } from "@utils/ProtectedRoute";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
				<Route
					path="day_plan"
					element={
						<ProtectedRoute>
							<DayPlanPage />
						</ProtectedRoute>
					}
				/>
			</Route>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="*" element={<NoMatchPage />} />
		</Routes>
	);
}

export default App;
