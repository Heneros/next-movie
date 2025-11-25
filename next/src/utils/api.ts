import { DOMAIN_BACKEND } from '@/_data/constants';
import { Movie } from '@/interfaces';
export type MoviesResponse = {
    data: Movie[];
    movies?: Movie[];
    total: number;
};

export async function getMovies({
    page = 1,
    limit = 10,
    q = '',
}: {
    page?: number;
    limit?: number;
    q?: string;
} = {}): Promise<MoviesResponse> {
    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('limit', String(limit));
    const res = await fetch(`${DOMAIN_BACKEND}/movie`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Failed to fetch trends: ' + res.status);
    const json = await res.json();
    return json;
}
