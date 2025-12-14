"use client";

import Loader from "@/components/global/Loader";
import MovieList from "./client/MovieList";
import { useGetAllMoviesQuery } from "@/redux/movie/moviesApiSlice";
import React, { Suspense } from "react";

interface MoviesClientProps {
    page: number;
}

function MoviesContent({ page }: MoviesClientProps) {
    const {
        data: movies,
        isLoading,
        isFetching,
        error,
    } = useGetAllMoviesQuery(page);

    if (isLoading) return <Loader />;

    // console.log(movies);
    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-red-600">
                    Error loading movies
                </h2>
                <p>Please try again later.</p>
            </div>
        );
    }
    return (
        <>
            {isFetching && <p className="text-gray-400"> Updated...</p>}
            <MovieList movies={movies || []} pagination={page} />;
        </>
    );
}

export default function MoviesClient({ page }: MoviesClientProps) {
    return (
        <Suspense fallback={<Loader />}>
            <MoviesContent page={page} />
        </Suspense>
    );
}
