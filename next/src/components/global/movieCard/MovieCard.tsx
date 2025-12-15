"use client"

import { MovieItem } from '@/interfaces'
import { useGetPreviewQuery } from '@/redux/movie/moviesApiSlice'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MovieCard({ info }: { info: MovieItem }) {


    const { data: previewData, isLoading, isError, error } = useGetPreviewQuery(info.id)




    return (
        <div className='mx-2 lg:mx-5  '>

            {isLoading ? (<Skeleton height={250} />) : previewData ? (
                <>
                    <div className='inverted-radius  h-[300px] sm:h-80 md:h-[340px] lg:h-[360px] cursor-pointer relative '>
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
            ) : (<div className="relative group flex items-center justify-center flex-col   inverted-radius  w-full  h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] cursor-pointer  bg-gray-700 text-yellow-500 text-sm ">

                <div> No Image</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h2 className="text-white text-xl font-bold mb-2">{info.title}</h2>

                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-yellow-500 text-sm">
                                Rating  {info.avgRating}
                            </span>
                            <span className="text-gray-300 text-sm">{info.year}</span>
                            <>
                                {info.category.map((item) => (
                                    <span className="text-gray-300 text-sm bg-gray-800/50 px-2 py-1 rounded">{item} </span>
                                ))}

                            </>
                        </div>
                        <div className=' mx-auto  flex justify-center '>
                            <Link href={`/movie/${info.id}`} className=" text-center block mx-auto w-100 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded transition-color">Visit page</Link>
                        </div>

                    </div>
                </div>
            </div>)}

        </div>
    )
}
