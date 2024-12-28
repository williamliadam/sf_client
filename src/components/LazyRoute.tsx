import type React from "react";
import { Suspense } from "react";
import { Route, type RouteProps } from "react-router";
import { Loading } from "@components/Loading";
import { ErrorBoundary } from "./ErrorBoundary";

const LazyRoute: React.FC<RouteProps> = ({ element, ...rest }) => {
	return (
		<Route
			{...rest}
			hasErrorBoundary
      
			errorElement={<div>error</div>}
			element={
				<Suspense fallback={<Loading />}>
					<ErrorBoundary>{element}</ErrorBoundary>
				</Suspense>
			}
		/>
	);
};

export default LazyRoute;
