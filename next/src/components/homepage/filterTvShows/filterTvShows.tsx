import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useRef } from "react";
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleCatTv } from "@/redux/tvShows/tvShowSlice";
import { Navigation } from "swiper/modules";

type Props = {
    allCategories: string[];
};
export default function FilterTvShows({ allCategories = [] }: Props) {
    const dispatch = useAppDispatch()
    const { selectedTvCategories } = useAppSelector((state) => state.tvShows)

    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);

    const onToggle = (cat) => {
        dispatch(toggleCatTv(cat))
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
        <div className="max-w-[1308px] bottom-5 flex lg:inline  md:py-5  md:my-17  relative">
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
                spaceBetween={12}
                // slidesPerView={'auto'}
                // // spaceBetween={75}
                // slidesPerView={'auto'}
                direction='horizontal'
                breakpoints={{
                    400: {
                        slidesPerView: 4, spaceBetween: 10
                    },
                    768: { slidesPerView: 5, spaceBetween: 15 },
                    1024: { slidesPerView: 12, spaceBetween: 25 },
                }}
                className="w-full"
            >
                <div className='flex items-center  w-full overflow-x-scroll relative'>


                    {allCategories.map((cat) => {
                        const active = selectedTvCategories.includes(cat)
                        return (
                            <SwiperSlide key={cat} className="!w-auto !flex-shrink-0"
                                style={{ width: 'auto' }} >
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

        </div >
    )
}