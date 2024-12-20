import { useEffect, type FC, type PropsWithChildren } from "react";
import { useAuth } from "./useAuth";
import { Navigate, useLocation } from "react-router";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();
	const prevLocation = useLocation();
	useEffect(() => {
		if (!user) {
			// user is not authenticated
			console.log("User is not authenticated");
			console.log(
				prevLocation.key,
				prevLocation.pathname,
				prevLocation.search,
				prevLocation.state,
				prevLocation.hash
			);
		}
	}, [user, prevLocation]);
	if (!user) {
		// user is not authenticated
		return <Navigate to={`/login?redirectTo=${prevLocation.pathname}`} />;
	}
	return children;
};
