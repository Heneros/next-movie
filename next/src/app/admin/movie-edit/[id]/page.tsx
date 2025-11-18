import { DOMAIN_BACKEND } from '@/_data/constants'
import MovieEditForm from '@/components/admin/edit-movie/MovieEditForm'
import UploadPreviewForm from '@/components/admin/edit-movie/UploadPreviewForm'
import Link from 'next/link'
import React from 'react'


export default async function MovieEdit({ params }) {
    const { id } = await params
    const res = await fetch(`${DOMAIN_BACKEND}/movie/${id}`, {
        next: { revalidate: 36 },
        cache: 'no-cache'
    })
    const data = await res.json()

    // console.log(data)
    return (
        <div>
            <div className='flex items-center justify-center flex-col bg-white/90 dark:bg-gray-900/70 py-5 shadow-lg'>
                <h1 className=' text-3xl  font-bold dark:text-white'> Edit Movie:  {data.title} {data.year}</h1>


                <UploadPreviewForm id={id} />
                <hr />

                <MovieEditForm movieItem={data} />

            </div>
        </div>
    )
}
