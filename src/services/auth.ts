import { emptySplitApi } from "@services/emptySliceApi";

export interface User {
	first_name: string;
	last_name: string;
}

export interface UserResponse {
	user: User;
	token: string;
	refreshToken: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}
export interface SignupRequest {
	email: string;
	password: string;
	code: string;
}

export const authApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<UserResponse, LoginRequest>({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
		verifyEmail: builder.mutation<void, { email: string }>({
			query: ({ email }) => ({
				url: "/auth/email/verify",
				method: "POST",
				body: { email },
			}),
		}),
		signup: builder.mutation<UserResponse, SignupRequest>({
			query: (credentials) => ({
				url: "/auth/signup",
				method: "POST",
				body: credentials,
			}),
		}),
		protected: builder.mutation<{ message: string }, void>({
			query: () => "protected",
		}),
	}),
});

export const { useLoginMutation, useProtectedMutation, useVerifyEmailMutation, useSignupMutation } = authApi;
