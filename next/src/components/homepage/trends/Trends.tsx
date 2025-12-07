"use client"


import MovieCard from '@/components/global/movieCard/MovieCard';
import { MovieItem } from '@/interfaces';
import { faArrowAltCircleRight, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";



export default function Trends({ movies }: { movies: MovieItem[] }) {
    const t = useTranslations("Homepage")

    // console.log(movies)

    return (
        <section className='w-full '>
            <div className="max-w-[1308px] mx-auto ">
                {/* Header */}
                <div className="flex items-end justify-between py-12 px-10 ">
                    <h2 className=" font-semibold text-5xl dark:text-white text-black">
                        {t("trends")}
                    </h2>
                    <div className='flex  items-center  justify-between '>
                        <Link href="/movies" className='dark:text-primary-second    text-black text-2xl pr-5'>
                            {t("seeMore")}
                        </Link>
                        <FontAwesomeIcon icon={faArrowRight} className='dark:text-primary-second  text-black ' />
                    </div>
                </div>
            </div>
            {/* Slider */}
            <Swiper

                navigation={{
                    prevEl: ".trends-prev",
                    nextEl: ".trends-next",
                }}
                spaceBetween={0}
                breakpoints={{
                    100: { slidesPerView: 2, spaceBetween: 0 },
                    400: { slidesPerView: 2, spaceBetween: 6 },
                    640: { slidesPerView: 2, spaceBetween: 8 },
                    768: { slidesPerView: 3, spaceBetween: 10 },
                    1100: { slidesPerView: 4.5, spaceBetween: 10 },
                    1500: { slidesPerView: 5.9, spaceBetween: 6 },
                }}
                className="py-4"
            >
                {movies.map((info) => (

                    <SwiperSlide key={info.id} className="w-auto! flex justify-center px-35 sm:px-20">
                        <MovieCard info={info} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section >
    )
}
