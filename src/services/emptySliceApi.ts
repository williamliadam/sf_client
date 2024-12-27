import {
	type BaseQueryFn,
	createApi,
	type FetchArgs,
	fetchBaseQuery,
	type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logout, setCredentials } from "@features/auth/authSlice";
import type { User } from "./auth";

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL as string,
	prepareHeaders: (headers, { getState }) => {
		// By default, if we have a token in the store, let's use that for authenticated requests
		const token = (getState() as RootState).auth.token;
		const refreshToken = (getState() as RootState).auth.refreshToken;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		if (refreshToken) {
			headers.set("x-refresh-token", refreshToken);
		}
		return headers;
	},
});
const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		// try to get a new token
		const refreshResult = (await baseQuery(
			"/auth/refreshToken",
			api,
			extraOptions,
		)) as { data: { user: User; token: string; refreshToken: string } };
		if (refreshResult.data) {
			// store the new token
			api.dispatch(setCredentials(refreshResult.data));
			// retry the initial query
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logout());
		}
	}
	return result;
};
// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
export default emptySplitApi.reducer;
