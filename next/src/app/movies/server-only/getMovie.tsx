import "server-only";

export async function getMovie(id: string) {
    const NEST_API = process.env.NEXT_PUBLIC_NEST_API;

    if (!NEST_API) {
        throw new Error("NEST_API environment variable is not defined");
    }

    const res = await fetch(`${NEST_API}/movie/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch movie ${id}`);
    }
    return res.json();
}

export async function getAllMovies(page: number = 1) {
    const NEST_API = process.env.NEXT_PUBLIC_NEST_API;

    if (!NEST_API) {
        throw new Error("NEST_API environment variable is not defined 22");
    }

    const res = await fetch(`${NEST_API}/movie?page=${page}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch movies`);
    }

    return res.json();
}
