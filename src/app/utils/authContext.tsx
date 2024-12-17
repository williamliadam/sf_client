import { useLocalStorageState } from "ahooks";
import {
	createContext,
	type FC,
	type PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
} from "react";
import { useNavigate } from "react-router";

type UserType = {
	id: string;
	token: string | null;
	username: string;
	avatar?: string;
};
type AuthContextType = {
	user?: UserType | null;
	login: (user: UserType) => void;
	logout: () => void;
};
type AuthProviderProps = PropsWithChildren;

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useLocalStorageState<UserType | null>("user");
	const navigate = useNavigate();

	const login = useCallback(
		(user: UserType) => {
			setUser(user);
			navigate("/");
		},
		[navigate, setUser],
	);

	const logout = useCallback(() => {
		setUser(null);
		navigate("/login");
	}, [navigate, setUser]);

	const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

	return (
		<AuthContext.Provider value={value}> {children} </AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}
	return context;
};
