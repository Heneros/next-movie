import baseApiSlice from '../api/baseApi';
import { User } from '@/interfaces/user';
import { logIn, logOut } from './authSlice';

export const authApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (body) => ({
                url: `/auth/`,
                method: 'POST',
                body,
            }),
        }),

        login: builder.mutation({
            query: (body) => ({
                url: `/auth/login`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User', 'Auth'],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(logIn(data.user));
                } catch (error) {
                    console.log('Login failed:', error);
                }
            },
            // providesTags: ['Auth'],
        }),

        authMe: builder.query<{ user: User }, void>({
            query: (body) => ({
                url: `/auth/auth_me`,
                method: 'GET',
                body,
            }),
            providesTags: ['Auth'],
        }),

        verifyEmail: builder.query({
            query: (body) => ({
                url: `/auth/verify/${body.emailToken}/${body.userId}`,
                method: 'GET',
                body,
            }),
        }),

        requestResetPassword: builder.mutation({
            query: (body) => ({
                url: `/auth/reset_password_request`,
                method: 'POST',
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: `/auth/reset_password`,
                method: 'POST',
                body,
            }),
        }),

        githubAuth: builder.query({
            query: () => ({
                url: `/auth/github/callback`,
                method: 'GET',
            }),
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    dispatch(logOut());
                } catch (err) {
                    console.log(err);
                }
            },
            invalidatesTags: ['Auth'],
        }),
    }),
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useAuthMeQuery,
    useRequestResetPasswordMutation,
    useResetPasswordMutation,
    useVerifyEmailQuery,
    useGithubAuthQuery,
    useLogoutMutation,
} = authApiSlice;
