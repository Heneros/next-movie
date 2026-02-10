import baseApiSlice from '../api/baseApi';

export const thirdCollection = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCollections: builder.query({
            query: () => ({
                url: '/collections'
            }),
            providesTags: (result) =>
                result ?
                    [...result.map(({ id }: any) => ({ type: 'Movies' as const, id })),
                    { type: 'Movies' as const, result }
                    ]

                    : [{ type: 'Movies' as const, id: 'LIST' }],
        }),
        createCollection: builder.mutation({
            query: ({ body }) => ({
                url: '/collections',
                method: 'POST',
                body
            })
        }),
        
    })
})

export const { useGetAllCollectionsQuery } = thirdCollection;