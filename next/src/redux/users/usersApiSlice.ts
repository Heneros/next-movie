import { User } from '@/interfaces';
import baseApiSlice from '../api/baseApi';

export const usersApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<User, number>({
            query: (userId) => `/users/${userId}`,
        }),
    }),
});

export const { useGetProfileQuery } = usersApiSlice;
