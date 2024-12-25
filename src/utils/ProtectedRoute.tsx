import type { FC, PropsWithChildren } from "react";
import { useAuth } from "./useAuth";
import { Navigate, useLocation } from "react-router";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();
	const prevLocation = useLocation();

	if (!user) {
		// user is not authenticated
		return <Navigate to={`/login?redirectTo=${prevLocation.pathname}`} />;
	}
	return children;
};
