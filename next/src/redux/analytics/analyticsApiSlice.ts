// import { IncrementViewResponse, ProfileStatsResponse } from '@/interfaces';
import baseApiSlice from '../api/baseApi';

export const analyticsApi = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStatsByProfileMonthly: builder.query({
            query: ({ userId }) => ({
                url: `/analytics/${userId}/monthly`,
                method: 'GET',
            }),
            providesTags: (result, error, { userId }) => [
                { type: 'ProfileStats', id: userId },
            ],
        }),

        getTotalStats: builder.query({
            query: ({ userId }) => ({
                url: `/analytics/${userId}/total`,
                method: 'GET',
            }),
            providesTags: (result, error, userId) => [
                { type: 'ProfileStats', id: userId },
            ],
        }),
    }),
});

export const { useGetStatsByProfileMonthlyQuery, useGetTotalStatsQuery } =
    analyticsApi;
