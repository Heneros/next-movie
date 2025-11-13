import { IncrementViewResponse, ProfileStatsResponse } from '@/interfaces';
import baseApiSlice from '../api/baseApi';

export const analyticsApi = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStatsByProfileMonth: builder.query<
            ProfileStatsResponse,
            { userId: number; monthsBack?: number }
        >({
            query: ({ userId }) => ({
                url: `/analytics/${userId}/stats`,
                method: 'GET',
            }),
            providesTags: (result, error, { userId }) => [
                { type: 'ProfileStats', id: userId },
            ],
        }),
        incrementProfileView: builder.mutation<IncrementViewResponse, string>({
            query: (userId) => ({
                url: `/analytics/${userId}/increment`,
                method: 'POST',
            }),
            invalidatesTags: (result, error, userId) => [
                { type: 'ProfileStats', id: userId },
            ],
        }),
        getTotalStats: builder.query<{ totalViews: number }, string>({
            query: (userId) => ({
                url: `/analytics/${userId}/total`,
                method: 'GET',
            }),
            providesTags: (result, error, userId) => [
                { type: 'ProfileStats', id: userId },
            ],
        }),
    }),
});

export const {
    useGetStatsByProfileMonthQuery,
    useGetTotalStatsQuery,
    useIncrementProfileViewMutation,
} = analyticsApi;
