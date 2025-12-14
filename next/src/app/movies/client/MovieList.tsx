"use client";

import React, { useState } from "react";

import Card from "./Card";

import Loader from "@/components/global/Loader";
import { MovieItem } from "@/interfaces";

export default function MovieList({
    movies,
    pagination,
}: {
    movies: MovieItem[];
    pagination: number;
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-5 lg:px-3 py-4">
            <h2 className="text-3xl font-bold mb-6 flex justify-center mx-auto font-alegreya text-emerald-800  dark:text-cyan-500 ">
                Movies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {movies?.map((item: MovieItem) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
