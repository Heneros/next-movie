import { MovieItem } from '@/interfaces';
import baseApiSlice from '../api/baseApi';


export const thirdMoviesApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovies: builder.query<MovieItem[], number>({
            query: (pageNumber = 1) => `/movie?page=${pageNumber}`,
            keepUnusedDataFor: 60,
            // providesTags: ["Movie"],
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Movie' as const,
                              id,
                          })),
                          'Movie',
                      ]
                    : ['Movie'],
        }),
        createMovie: builder.mutation({
            query: (movieData) => ({
                url: '/movie',
                body: movieData,
                method: 'POST',
            }),
        }),
        getMovie: builder.query<MovieItem, number>({
            query: (id: number) => `/movie/${id}`,
            keepUnusedDataFor: 60,
            providesTags: (result, error, id) => [
                { type: 'Movie' as const, id },
            ],
        }),

        getPreview: builder.query({
            query: (id) => {
                console.log('Preview ID received:', id);
                const url = `/movie/preview/${id}`;
                console.log('Full URL being requested:', url);
                return url;
            },
            keepUnusedDataFor: 60,
            providesTags: (result, error, id) => [
                { type: 'Movie' as const, id },
            ],
        }),

        uploadPreview: builder.mutation({
            query: ({ movieId, file }) => {
                const fm = new FormData();
                fm.append('file', file);
                return {
                    url: `preview/${movieId}`,
                    method: 'POST',
                    body: file,
                };
            },
        }),
    }),
});

export const {
    useGetAllMoviesQuery,
    useGetPreviewQuery,
    useGetMovieQuery,
    useCreateMovieMutation,
    useUploadPreviewMutation,
} = thirdMoviesApiSlice;
