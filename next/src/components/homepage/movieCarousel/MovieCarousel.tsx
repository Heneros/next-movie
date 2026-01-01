"use client";

import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useGetPreviewQuery } from "@/redux/movie/moviesApiSlice";

type Movie = {
    id: string | number;
    title: string;
    description?: string;
    backdropUrl?: string;
    posterUrl?: string;
    imdb?: number;
    provider?: string;
};

type HerosSliderProps = {
    movies: Movie[];
    className?: string;
    autoplayMs?: number;
};

export default function MovieCarousel({
    movies,
    className = "",
    autoplayMs = 600000,
}: HerosSliderProps) {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const iconStar = 'icons/star.svg'
    const [activeIndex, setActiveIndex] = useState(0);


    const slides = useMemo(() => {
        if (!movies || movies.length === 0) {
            return [
                {
                    id: "empty",
                    title: "No movies",
                    description: "No data provided",
                    backdropUrl: "/images/placeholder-backdrop.jpg",
                    posterUrl: "/images/placeholder-poster.jpg",
                    imdb: 0,
                },
            ];
        }
        return movies;
    }, [movies]);



    return (
        <div className={`relative w-full ${className}`}>
            <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                loop={true}
                autoplay={{ delay: autoplayMs }}
                fadeEffect={{ crossFade: true }}
                watchSlidesProgress
                effect="fade"
                onSwiper={setSwiperInstance}
                onSlideChange={(s) => setActiveIndex(s.realIndex)}
                className="w-full h-[78vh]"
            >
                {slides.map((m) => (
                    <SwiperSlide key={m.id}>
                        <div className=" w-full h-[60vh] md:h-[725px]  flex md:items-center">
                            <div className="absolute inset-0 ">
                                {m.backdropUrl ? (
                                    <Image
                                        src={m.backdropUrl}
                                        alt={m.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                    />
                                ) : (
                                    <div className="w-full h-full  " />
                                )}
                            </div>

                            <div className="w-full  lg:mx-16 mt-56 flex flex-col lg:flex-row md:flex x-4 lg:px-16  items-center relative">
                                <div className="  flex-1 text-black dark:text-white py-12">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-4xl md:text-6xl font-medium leading-tight mb-4"
                                    >
                                        {m.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.2,
                                        }}
                                        className="text-sm md:text-base mb-6"
                                        style={{ maxWidth: 720 }}
                                    >
                                        {m.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.35 }}
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: 5 }).map(
                                                    (_, i) => {
                                                        const filled = m.imdb
                                                            ? i <
                                                            Math.round(
                                                                (m.imdb /
                                                                    10) *
                                                                5,
                                                            )
                                                            : false;
                                                        return (
                                                            <Image
                                                                key={i}
                                                                alt={'Icon star'}
                                                                width={32}
                                                                height={32}
                                                                src={iconStar}
                                                                className={`h-5 w-5 ${filled
                                                                    ? "text-yellow-400"
                                                                    : "text-gray-600"
                                                                    }`}

                                                            />

                                                        );
                                                    },
                                                )}
                                            </div>

                                            {typeof m.imdb === "number" && (
                                                <div className="inline-flex items-center gap-2 px-2 py-1 rounded text-sm font-semibold bg-yellow-500 text-black">
                                                    IMDB {m.imdb.toFixed(1)}
                                                </div>
                                            )}

                                            {m.provider && (
                                                <div className="text-sm text-red-400 font-semibold">
                                                    {m.provider}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-3">
                                            <Link
                                                href={`/movies/${m.id}`}
                                                className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition font-medium dark:text-white text-black"
                                            >
                                                <FontAwesomeIcon icon={faPlay} className="h-5 w-5 dark:text-white text-black" />

                                                Watch Movie
                                            </Link>

                                            <Link
                                                href={`/movies/${m.id}`}
                                                className="flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white/10
                                transition
                                dark:text-white text-black"
                                            >
                                                <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5 dark:text-white text-black" />

                                                More Info
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                                <div
                                    className=" absolute  hidden none  lg:flex lg:flex-0
                                right-0  bottom-7  flex-row align-baseline justify-center items-center"
                                >
                                    {slides.map((thumb, index) => (
                                        <div
                                            key={thumb.id}
                                            onClick={() =>
                                                swiperInstance?.slideToLoop(
                                                    index,
                                                )
                                            }
                                            className={`
                                                h-14 w-14
                                                md:w-20 md:h-20 
                                                lg:w-28 lg:h-28  
                                                xl:w-30 xl:h-30 
                                                rounded-xl overflow-hidden border-2 cursor-pointer transform transition     ${activeIndex === index
                                                    ? "border-[#006486] scale-105 h-20 w-20 md:h-25 md:w-25   lg:w-30 lg:h-30   xl:h-43 xl:w-43 "
                                                    : "border-[#006486] hover:scale-105"
                                                }`}
                                            role="button"
                                            aria-label={`preview ${thumb.title}`}
                                        >
                                            {thumb.posterUrl ? (
                                                <Image
                                                    src={thumb.posterUrl}
                                                    width={128}
                                                    height={176}
                                                    alt={thumb.title}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs">
                                                    No image
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
