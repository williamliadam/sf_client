import type { User } from "@services/auth";
import type { RootState } from "@store/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
	user: User | null;
	token: string | null;
	refreshToken: string | null;
};

const slice = createSlice({
	name: "auth",
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		setCredentials: (
			state,
			{
				payload: { user, token, refreshToken },
			}: PayloadAction<{ user: User; token: string; refreshToken: string }>,
		) => {
			state.user = user;
			state.token = token;
			state.refreshToken = refreshToken;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
