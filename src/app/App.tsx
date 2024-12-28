import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import { HomeLayout } from "@layouts/HomeLayout";
import { Loading } from "@components/Loading";
import { ProtectedRoute } from "@utils/ProtectedRoute";

const DayPlanPage = lazy(() => import("./pages/DayPlanPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NoMatchPage = lazy(() => import("./pages/NoMatchPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route
					path="/"
					element={<HomeLayout />}
					hasErrorBoundary
					errorElement={<div>error</div>}
				>
					<Route index element={<HomePage />} />
					<Route
						path="day_plan"
						element={
							<ProtectedRoute>
								<DayPlanPage />
							</ProtectedRoute>
						}
					/>
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="*" element={<NoMatchPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
