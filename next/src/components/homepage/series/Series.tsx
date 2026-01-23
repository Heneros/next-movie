"use client"

import MovieCard from '@/components/global/movieCard/MovieCard';
import { MovieItem } from '@/interfaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl';
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from '@/redux/hooks';

export default function Series({ tvSeries }: { tvSeries: MovieItem[] }) {
    const { selectedTvCategories } = useAppSelector((s: any) => s.tvShows)

    const t = useTranslations("Series");
  
    return (
        <section className='w-full '>
            <div className="max-w-[1308px] mx-auto ">
                {/* Header */}
                <div className="flex items-end justify-between py-12 px-10 ">
                    <h2 className=" font-semibold text-2xl md:text-5xl dark:text-white text-black">
                        {t("series")}
                    </h2>
                    <div className='flex  items-center  justify-between '>
                        <Link href="/movies" className=' text-lg md:text-2xl 
                                                dark:text-primary-second    text-black pr-5'>
                            {t("seeMore")}
                        </Link>
                        <FontAwesomeIcon icon={faArrowRight} className='dark:text-primary-second  text-black ' />
                    </div>
                </div>
            </div>
            {/* Slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 50 },
                    900: { slidesPerView: 3, spaceBetween: 80 },
                    1024: { slidesPerView: 4.2, spaceBetween: 85 },
                    1280: { slidesPerView: 5.2 },

                }}
            >
                {tvSeries?.map((info) => (
                    <SwiperSlide key={info.id} className="w-auto! ">
                        <MovieCard info={info} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section >

    )

}
