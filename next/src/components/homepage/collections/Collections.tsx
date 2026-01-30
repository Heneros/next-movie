
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import { collections } from '@/_data/slider';
import StackedCard from './CollectionItem';




export default function Collections({ series, movies }) {
    const [tab, setTab] = useState<"Series" | "Movies">('Movies');


    const newAMovies = movies.map(item => ({
        ...item,
        type: 'Movies'
    }))

    const newAMSeries = series.map(item => ({
        ...item,
        type: 'Series'
    }))

    const collections = [...newAMovies, ...newAMSeries]

    const filteredCollections = collections.filter(item => item.type === tab)
    return (
        <>
            <div className=' flex justify-between mx-auto mb-10 max-w-[1308px] '>
                <h2 className=" font-semibold text-2xl md:text-5xl dark:text-white text-black">
                    Collections
                </h2>
                <div className='tabs flex justify-center'>
                    <div className='relative flex items-center bg-white/5 
                    border-2 border-green rounded-full cursor-pointer  p-1 w-[250px] h-[35px]
                    '>
                        <div className={`
                             absolute top-1 bottom-1 w-[calc(50%-4px)]
        rounded-full bg-sky-500
        transition-all duration-300
        ${tab === "Series" ? "left-1" : "left-[calc(50%+2px)]"}
                            `} />
                        <button
                            type="button"
                            role="tab" className={`relative z-10 flex-1 text-sm  ${tab === 'Series' ? 'text-white' : 'text-[#000]'}`}
                            onClick={() => setTab('Series')}>Series </button>

                        <button
                            onClick={() => setTab('Movies')}
                            className={`relative z-10 flex-1 text-sm  ${tab === 'Movies' ? 'text-white' : 'text-[#000]'}`}
                            type="button"
                            role="tab">Movies</button>
                    </div>
                </div>
            </div>
            <div className="flex h-full  justify-between ">

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 4500 }}
                    spaceBetween={12}
                    slidesPerView={4}
                    breakpoints={{
                        1024: { slidesPerView: 4, spaceBetween: 35 },
                    }}
                    direction='horizontal' className="px-6 py-10  h-[375px] " >
                    {filteredCollections.map(item => (
                        <SwiperSlide className=" max-h-80">
                            <StackedCard
                                title={item.title}
                                image={item.image}
                                image2={item.image2}
                                image3={item.image3}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

