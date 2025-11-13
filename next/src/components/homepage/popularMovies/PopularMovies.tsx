import { DOMAIN_BACKEND } from "@/_data/constants";
import PopularMoviesClient from "./PopularMoviesClient";
import { MovieItem } from '@/interfaces';

export default async function PopularMovies({ popularMovies }: { popularMovies: MovieItem[] }) {

    try {
        const res = await fetch(`${DOMAIN_BACKEND}/movie`, {

            next: { revalidate: 60 },
            cache: "force-cache",
        });
        if (!res.ok) {
            console.error("Backend returned", res.status);
            return <div>No movies in DB (status {res.status})</div>;
        }
        const trends = await res.json();

        return <PopularMoviesClient trends={popularMovies} />;
    } catch (err) {
        console.error("Fetch failed:", err);
        return <div>Backend unavailable — check server</div>;
    }
}