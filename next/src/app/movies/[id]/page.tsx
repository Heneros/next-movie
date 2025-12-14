import React from "react";
import type { Metadata } from "next";
import { getAllMovies, getMovie } from "../server-only/getMovie";
import { MovieItem } from "@/interfaces";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateStaticParams() {
    const movie = await getAllMovies();

    return movie.map((m: MovieItem) => ({ id: m.id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
        description: movie.description,
    };
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    const movie = await getMovie(id);
    return <div>Movie ID: {movie.id}</div>;
}
