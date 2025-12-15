
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from '@/components/global/movieCard/MovieCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieItem } from "@/interfaces";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PopularMoviesClient({ popularMovies }: { popularMovies: MovieItem[] }) {

    const t = useTranslations("PopularMovies")

    // console.log(trends)
    return (
        <section className="w-full">
            <div className="max-w-[1308px] mx-auto">
                <div className="flex items-end justify-between py-12 px-10">
                    <h2 className="font-semibold text-5xl dark:text-white text-black">
                        {t("popularmovies")}
                    </h2>
                    <div className='flex  items-center  justify-between '>
                        <Link href="/movies" className='dark:text-primary-second    text-black text-2xl pr-5'>
                            {t("seeMore")}
                        </Link>
                        <FontAwesomeIcon icon={faArrowRight} className='dark:text-primary-second  text-black ' />
                    </div>
                </div>
            </div>


            <Swiper

                // navigation
                // spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 50 },
                    900: { slidesPerView: 3, spaceBetween: 80 },
                    1024: { slidesPerView: 4.2, spaceBetween: 85 },
                    1280: { slidesPerView: 5.2 },

                }}
            >
                {popularMovies.map((trend) => (
                    <SwiperSlide key={trend.id} className="w-auto! ">

                        <MovieCard info={trend} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}
