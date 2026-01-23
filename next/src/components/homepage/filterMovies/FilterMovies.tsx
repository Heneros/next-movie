
"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearCategories, toggleCategory } from '@/redux/movie/movieSlice';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useMemo, useRef } from 'react';
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


type Props = {
    allCategories: string[];
};
export default function FilterMovies({ allCategories = [] }: Props) {
    const dispatch = useAppDispatch()
    const { selectedCategories } = useAppSelector((state) => state.movies)

    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);

    const onToggle = (cat) => {
        dispatch(toggleCategory(cat))
    }

    useEffect(() => {
        if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
            swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
            swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [])
    return (
        <div className="max-w-[1308px] flex lg:inline  md:py-5 my-6 md:my-17 px-10 relative">
            <button
                ref={prevButtonRef}
                className="
                swiper-custom-prev   
                absolute  left-0  top-1/2 -translate-y-1/2 
                z-10 w-10 h-10 flex items-center justify-center cursor-pointer"
                aria-label='Prev slider'
            >
                <FontAwesomeIcon icon={faAngleLeft} className=" text-[#000] dark:text-white text-lg" />
            </button>
            <button
                ref={nextButtonRef}
                className="       swiper-custom-next 
              absolute      right-0 top-1/2  -translate-y-1/2   z-10 w-10 h-10 flex items-center justify-center cursor-pointer"
                aria-label='Next slider'
            >
                <FontAwesomeIcon icon={faAngleRight} className=" 
                text-[#000] dark:text-white text-lg" />
            </button>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: nextButtonRef.current,
                    prevEl: prevButtonRef.current,
                    disabledClass: "swiper-button-disabled"

                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                // // spaceBetween={75}
                // slidesPerView={'auto'}
                direction='horizontal'
                breakpoints={{
                    400: { slidesPerView: 4, },
                    768: { slidesPerView: 5, },
                    1024: { slidesPerView: 12, },
                }}
            >
                <div className='flex items-center mb-6 overflow-x-scroll relative'>


                    {allCategories.map((cat) => {
                        const active = selectedCategories.includes(cat)
                        return (
                            <SwiperSlide key={cat} className="max-w-29 !mr-0 ">
                                <button
                                    key={cat}
                                    onClick={() => onToggle(cat)}
                                    className={`px-4 py-2 rounded-full dark:text-amber-50 border-gray-600  text-primary-second dark:border-[#fff]
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
