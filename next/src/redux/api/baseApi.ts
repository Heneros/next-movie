import {
    createApi,
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { BASE_URL, NEST_API } from '@/_data/constants';
import type { RootState } from '@/interfaces/rootReducer';

const baseApiSlice = createApi({
    //baseQuery: baseQueryWithRefreshToken,

    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.auth.user?.accessToken;
            const googleToken = state.auth?.googleToken;
            const githubToken = state.auth?.githubToken;
            const discordToken = state.auth?.discordToken;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            } else if (googleToken) {
                headers.set('authorization', `Bearer ${googleToken}`);
            } else if (githubToken) {
                headers.set('authorization', `Bearer ${githubToken}`);
            } else if (discordToken) {
                headers.set('authorization', `Bearer ${discordToken}`);
            }
            return headers;
        },
    }),
    tagTypes: ['User', 'Movie', 'ProfileStats', 'Auth'] as const,
    endpoints: (builder) => ({}),
});

export default baseApiSlice;
