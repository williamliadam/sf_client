import { selectCurrentUser } from "@app/features/auth/authSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
	const user = useSelector(selectCurrentUser);

	return useMemo(() => ({ user }), [user]);
};
