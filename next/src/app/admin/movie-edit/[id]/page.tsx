import { DOMAIN_BACKEND } from '@/_data/constants'
import React from 'react'
import UploadPreviewForm from './UploadPreviewForm'
import MovieEditForm from './MovieEditForm'

export default async function MovieEdit({ params }) {
    const { id } = await params
    const res = await fetch(`${DOMAIN_BACKEND}/movie/${id}`, { next: { revalidate: 60 }, })
    const data = await res.json()

    // console.log(data)
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <h1 className=' text-3xl  font-bold'> Edit Movie  {data.title} {data.year}</h1>
                <UploadPreviewForm id={id} />
                <form>
                    <MovieEditForm movieItem={data} />
                </form>
            </div>
        </div>
    )
}
