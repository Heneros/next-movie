import { useGetProfileQuery } from '@/redux/users/usersApiSlice'
import React from 'react'

export default function Profile({ params }: { params: { id: number } }) {


    const { data, isLoading, isError, error } = useGetProfileQuery(params.id)

    if (isLoading) return <div>Loading profike...</div>;
    if (isError) return <div>Error: {error?.toString()}</div>;


    return (
        <div>

            {data?.email}
        </div>
    )
}
