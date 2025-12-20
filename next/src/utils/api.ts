import { DOMAIN_BACKEND } from '@/_data/constants';
import { GetMoviesParams, Movie } from '@/interfaces';
export type MoviesResponse = {
    data: Movie[];
    movies?: Movie[];
    total: number;
};

export async function getMovies({
    page = 1,
    limit = 10,
    category,
    year,
    minRating,
    orderBy,
    order,
}: GetMoviesParams = {}): Promise<MoviesResponse> {
    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('limit', String(limit));

    if (category) {
        params.set('category', category);
    }

    if (year) {
        params.set('year', String(year));
    }

    if (minRating) {
        params.set('minRating', String(minRating));
    }

    if (orderBy) {
        params.set('orderBy', orderBy);
    }

    if (order) {
        params.set('order', order);
    }
    console.log('123', DOMAIN_BACKEND);
    try {
        const res = await fetch(
            `${DOMAIN_BACKEND}/movie?${params.toString()}`,
            {
                cache: 'no-store',
            },
        );

        // console.log(process.env.NEXT_PUBLIC_TEST);
        if (!res.ok) {
            // console.log(res);
            throw new Error('Failed to fetch movies: ' + res.status);
        }
        const json = await res.json();
        return json;
    } catch (error: any) {
        console.error(' Fetch error details :', {
            message: error.message,
            cause: error.cause,
        });

        return { data: [], total: 0 };
    }
}
