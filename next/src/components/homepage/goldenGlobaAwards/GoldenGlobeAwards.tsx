"use client"

import MovieCard from '@/components/global/movieCard/MovieCard'
import { MovieItem } from '@/interfaces'
import { useTranslations } from 'next-intl'
import React from 'react'
import GoldenGlobe from '@/assets/img/home/GoldenGlob.png'
import GoldenGlobeMovie from '@/assets/img/home/movies.png'
import GoldenGlobeItem from '../goldenGlobeItem/GoldenGlobeItem'
import Image from 'next/image'

export default function GoldenGlobeAwards({ moviesGolden }: { moviesGolden: MovieItem[] }) {


    /// bconst t = useTranslations("GoldenAwards")

    return (
        <div className="
         mt-15 relative w-full min-h-[50vh] overflow-hidden bg-[#DAA521]">
            <div className="absolute  z-45
                  bottom-5 left-1/2 max-w-[90%] text-center -translate-x-1/2 font-bold border border-[#fff] text-2xl   lg:text-5xl rounded-4xl  px-12 py-8 bg-black/40 text-[#fff]">
                Watching Golden Globe 2024 Movies
            </div>
            <div className="flex items-center justify-center lg:flex-row flex-col">
                <div className="w-full  lg:w-1/2 h-full relative overflow-hidden">

                    <Image src={GoldenGlobe} sizes="30vw" alt="Globe" className="w-full h-full " />

                </div>
                <div className="w-full lg:w-1/2 h-full relative overflow-hidden">

                    <Image src={GoldenGlobeMovie}
                       
                        sizes="30vw" alt="Globe MOVIE" className="w-full h-full " />

                </div>




            </div>

        </div>
    )
}
