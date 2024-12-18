import type { FC, PropsWithChildren } from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();
	if (!user) {
		// user is not authenticated
		return <Navigate to="/login" />;
	}
	return children;
};
