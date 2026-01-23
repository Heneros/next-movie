
import baseApiSlice from '../api/baseApi';


export const thirdTvsShowApiSlice = baseApiSlice.injectEndpoints({
      endpoints: (builder) => ({
            getAllTvShows: builder.query({
      query: (params) => ({
        url: '/tv-shows',
        params,
      }),
      providesTags: ['TvShow'],
    }),
    createTvShow: builder.mutation({
      query: (body) => ({
        url: '/tv-shows',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TvShow'],
    }),
    updateTvShow: builder.mutation({
      query: ({ tvShowId, body }) => ({
        url: `/tv-shows/${tvShowId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, { tvShowId }) => [
        { type: 'TvShow', id: tvShowId },
      ],
    }),

        deleteTvShow: builder.mutation({
      query: (tvShowId: number) => ({
        url: `/tv-shows/${tvShowId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TvShow'],
    }),
      })
})


