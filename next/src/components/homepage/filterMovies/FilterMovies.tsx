
"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearCategories, toggleCategory } from '@/redux/movie/movieSlice';
import React from 'react'


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
            <div className='flex items-center gap-4 mb-6'>
                {allCategories.map((cat) => {
                    const active = selectedCategories.includes(cat)
                    return (
                        <button
                            key={cat}
                            onClick={() => onToggle(cat)}
                            className={`px-4 py-2 rounded-full border ${active ? 'bg-pink-500 text-white' : 'bg-transparent text-gray-300'
                                }`}
                        >
                            {cat}
                        </button>
                    )
                })}
                <button
                    onClick={() => dispatch(clearCategories())}
                    className="px-3 py-1 ml-4 text-sm border rounded"
                >
                    Clear
                </button>
            </div>
        </div>
    )
}
