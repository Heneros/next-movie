"use client"

import { MovieItem } from '@/interfaces'
import { useGetPreviewQuery } from '@/redux/movie/moviesApiSlice'
import Image from 'next/image'
import React from 'react'

export default function GoldenGlobeItem({ info }: { info: MovieItem }) {
    const { data: previewData, isLoading, isError, error } = useGetPreviewQuery(info.id)

    return (
        <div className="w-50 relative overflow-hidden h-100">
            <div className="preview">
                <Image src={previewData} width={150} fill alt={info.title} />
            </div>
        </div>
    )
}


