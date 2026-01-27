
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


function StackedCard({
    title,
    image,
    image2,
    image3
}: {
    title: string;
    image2: string;
    image3: string;
    image: string;
}) {
    return (
        <div className='relative h-full cursor-pointer'>
            <div className='absolute inset-0 translate-x-8 -translate-y-1  scale-[0.96]  z-0    '>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <Image src={image3} width={150} height={350} alt="" className="w-full h-full object-cover opacity-35" />
                </div>
            </div>
            <div className='absolute inset-0 -translate-y-3 translate-x-4 scale-[0.96]   z-10   '>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <Image src={image2} width={150} height={350} alt="" className="w-full h-full object-cover opacity-65" />
                </div>
            </div>
            <div className="relative z-20 h-full overflow-hidden -translate-y-9 rounded-2xl shadow-2xl  hover:translate-x-10   hover:translate-y-10  duration-500 hover:z-50 ">
                <div className='w-full h-full rounded-2xl '>
                    <Image src={image} width={150} height={350} alt="" className="w-full h-full object-cover opacity-100" />
                    <div className='absolute bottom-0  m-auto  inset-x-0 w-25 h-45 z-36'>
                        <h2 className='text-4xl font-extrabold text-white'>
                            {title}
                        </h2>

                    </div>

                </div>
            </div>

        </div>
    );
}




export default function Collections() {
    const [activeTab, setActiveTab] = useState('Movies');


    return (
        <div className="flex h-full justify-between ">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3500 }}
                spaceBetween={12} breakpoints={{
                    100: { slidesPerView: 1, spaceBetween: 20 },
                    500: { slidesPerView: 2, spaceBetween: 25 },
                    768: { slidesPerView: 3, spaceBetween: 25 },
                    1024: { slidesPerView: 4, spaceBetween: 35 },
                }} direction='horizontal' className="px-6 py-10  h-[350px] " >

                <SwiperSlide className='w-[25%] h-full '>

                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide className='w-[25%] h-full '>


                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide className='w-[25%] h-full '>

                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide className='w-[25%] h-full '>


                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide style={{ width: 'auto' }}>

                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide className='w-[25%] h-full '>

                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide className='w-[25%] h-full '>


                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>
                <SwiperSlide className='w-[25%] h-full '>


                    <StackedCard
                        title="Musicals"
                        image="https://picsum.photos/500/800?1"
                        image2="https://picsum.photos/500/800?2"
                        image3="https://picsum.photos/500/800?3"
                    />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

