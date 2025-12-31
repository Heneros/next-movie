
"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearCategories, toggleCategory } from '@/redux/movie/movieSlice';
import React from 'react'


import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


type Props = {
    allCategories: string[];
};
export default function FilterMovies({ allCategories = [] }: Props) {
    const dispatch = useAppDispatch()
    const { selectedCategories } = useAppSelector((state) => state.movies)

    const onToggle = (cat) => {
        dispatch(toggleCategory(cat))
    }
    return (
        <div className="max-w-[1308px] mx-auto px-10">
            <Swiper
                modules={[Navigation]}
                navigation
                // spaceBetween={75}
                slidesPerView={4}
                breakpoints={{
                    768: { slidesPerView: 5, spaceBetween: 40 },
                    1024: { slidesPerView: 12, spaceBetween: 50 },
                }}
            >
                <div className='flex items-center gap-4 mb-6 overflow-x-scroll'>
                    {allCategories.map((cat) => {
                        const active = selectedCategories.includes(cat)
                        return (
                            <SwiperSlide key={cat} className="w-auto">
                                <button
                                    key={cat}
                                    onClick={() => onToggle(cat)}
                                    className={`px-4 py-2 rounded-full min-w-5
                                        whitespace-nowrap border ${active ? 'bg-pink-500 text-white' : 'bg-transparent text-gray-300'
                                        }`}
                                >
                                    {cat}
                                </button>
                            </SwiperSlide>
                        )
                    })}

                </div>

            </Swiper>

        </div>
    )
}
