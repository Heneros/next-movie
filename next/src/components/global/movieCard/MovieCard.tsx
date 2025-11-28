"use client"

import { MovieItem } from '@/interfaces'
import { useGetPreviewQuery } from '@/redux/movie/moviesApiSlice'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MovieCard({ info }: { info: MovieItem }) {


    const { data: previewData, isLoading, isError, error } = useGetPreviewQuery(info.id)



    // if (isLoading) return <div>Loading preview...</div>;
    // if (error) return <div>Failed to load preview. (Error {error?.status!})</div>;
    // console.log(previewData)

    // console.log(info.id)
    return (
        <div className='w-[140px]  sm:w-[170px] md:w-[190px] lg:w-[296px]'>

            {isLoading ? (<Skeleton height={250} />) : previewData ? (
                <>
                    <div className='inverted-radius  w-full  h-[300px] sm:h-80 md:h-[340px] lg:h-[360px] cursor-pointer relative '>
                        <Image
                            fill
                            loading="lazy"
                            decoding="async"
                            quality={75}
                            className="object-cover       
                                    duration-500
                                    ease-in-out
                                    hover:scale-110"
                            alt={info.title ?? "poster"} sizes="(max-width: 768px) 200px, (max-width: 1280px) 240px, 300px"
                            src={`${previewData.url}`} />

                    </div>
                    <div
                        className="
         top-0 left-0 z-50 w-14 h-14 rounded-2xl backdrop-blur-lg 
        flex justify-center items-center
        text-2xl font-bold shadow-md  bg-auto bg-left-top  cursor-pointer
        absolute
          duration-500
       ease-in-out
      "
                        style={{ backgroundImage: `url(${previewData.url})` }}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="relative z-10 text-2xl dark:text-white text-neutral-950 w-5 h-5"
                        />
                    </div>
                </>

            ) : (<div className="inverted-radius  w-full  h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] cursor-pointer  bg-gray-700 flex items-center justify-center text-yellow-500 text-sm">
                No Image
            </div>)}

        </div>
    )
}
