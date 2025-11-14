import { DOMAIN_BACKEND } from '@/_data/constants'
import React from 'react'
import UploadPreviewForm from './UploadPreviewForm'

export default async function MovieEdit({ params }) {
    const { id } = await params
    const res = await fetch(`${DOMAIN_BACKEND}/movie/${id}`, { next: { revalidate: 60 }, })
    const data = await res.json()

    // console.log(data)
    return (
        <div>
            {data.title}
            <UploadPreviewForm id={id} />
        </div>
    )
}
