
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { collections } from '@/_data/slider';


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
        <div className='relative h-full  cursor-pointer'>
            <div className='absolute inset-0 translate-x-8 translate-y-9  scale-[0.96]  z-0    '>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <Image src={image3} width={150} height={150} alt="" className="w-full h-full object-cover opacity-35" />
                </div>
            </div>

            <div className='absolute inset-0 translate-y-6 translate-x-4 scale-[0.96]   z-10   '>
                <div className='w-full h-full rounded-2xl overflow-hidden'>
                    <Image src={image2} width={150} height={150} alt="" className="w-full h-full object-cover opacity-65" />
                </div>
            </div>
            <div className="relative z-20 h-full overflow-hidden translate-y-0 rounded-3xl hover:translate-x-10   hover:translate-y-10  duration-500 hover:z-50 ">
                <div className='w-full h-full rounded-2xl '>
                    <Image src={image} width={150} height={150} alt="" className="w-full h-full object-cover opacity-100" />
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




export default function Collections({ series, movies }) {
    const [tab, setTab] = useState<"Series" | "Movies">('Movies');

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
                    // breakpoints={{
                    //     1024: { slidesPerView: 4, spaceBetween: 35 },
                    // }}




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

