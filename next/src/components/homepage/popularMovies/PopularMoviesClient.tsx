
"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from '@/components/global/movieCard/MovieCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieItem } from "@/interfaces";
import { useTranslations } from "next-intl";
import Link from "next/link";
import FilterMovies from "../filterMovies/FilterMovies";
import { useAppSelector } from "@/redux/hooks";
import { filterMovies } from "@/utils/filterMovies";

export default function PopularMoviesClient({ popularMovies }: { popularMovies: MovieItem[] }) {
    const { selectedCategories } = useAppSelector((s: any) => s.movies);

    const filtered = useMemo(() => {
        return filterMovies(popularMovies, selectedCategories);
    }, [popularMovies, selectedCategories])


    const t = useTranslations("PopularMovies")

    const allCategories = useMemo(() => {
        const set = new Set<string>()
        popularMovies.forEach(m => m.category.forEach(c => set.add(c)));
        return Array.from(set)
    }, [popularMovies])


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

            <FilterMovies allCategories={allCategories} />
            <Swiper
                slidesPerView={5}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 50 },
                    900: { slidesPerView: 3, spaceBetween: 80 },
                    1024: { slidesPerView: 4.2, spaceBetween: 85 },
                    1280: { slidesPerView: 5.2 },

                }}
            >


                {filtered?.map((trend) => (
                    <SwiperSlide key={trend.id} className="w-auto! ">

                        <MovieCard info={trend} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}
