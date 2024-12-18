import { Routes, Route } from "react-router";
import { HomeLayout } from "@layouts/HomeLayout";
import { DayPlanPage } from "./pages/DayPlanPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NoMatchPage } from "./pages/NoMatchPage";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
				<Route path="day_plan" element={<DayPlanPage />} />
			</Route>
			<Route path="/login" element={<LoginPage />} />
			<Route path="*" element={<NoMatchPage />} />
		</Routes>
	);
}

export default App;
