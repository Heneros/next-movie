"use client";

import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MovieItem } from "@/interfaces";
import { useGetPreviewQuery } from "@/redux/movie/moviesApiSlice";

export default function MovieCard({ info }: { info: MovieItem }) {
    const { data: previewData, isLoading } = useGetPreviewQuery(info.id);

    return (
        <div className="relative w-[145px] sm:w-[180px] md:w-[220px] lg:w-[260px]">

            {isLoading && (
                <Skeleton
                    height={340}
                    borderRadius={30}
                />
            )}

            {!isLoading && previewData && (
                <>
                    <div className="inverted-radius relative w-full h-[210px] sm:h-[260px] md:h-[310px] lg:h-[350px] overflow-hidden cursor-pointer">
                        <Image
                            fill
                            loading="lazy"
                            decoding="async"
                            quality={75}
                            className="object-cover duration-500 ease-in-out hover:scale-110"
                            src={previewData.url}
                            alt={info.title ?? "poster"}
                        />
                    </div>

                    <div
                        className="
              absolute top-2 left-2
              z-50 w-10 h-10 
              rounded-2xl 
              backdrop-blur-lg 
              flex justify-center items-center
              shadow-md
            "
                        style={{ backgroundImage: `url(${previewData.url})` }}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="relative z-10 text-white w-4 h-4"
                        />
                    </div>
                </>
            )}

            {!isLoading && !previewData && (
                <div
                    className="
            inverted-radius
            w-full
            h-[210px] sm:h-[260px] md:h-[310px] lg:h-[350px]
            bg-neutral-800
            flex items-center justify-center
            text-yellow-500
            text-sm
          "
                >
                    No Image
                </div>
            )}

        </div>
    )
}
