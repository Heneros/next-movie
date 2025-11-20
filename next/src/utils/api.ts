import { DOMAIN_BACKEND } from '@/_data/constants';
import type { Movie } from '@/interfaces';

export type MoviesResponse = { data: Movie[]; total: number };

export async function getTrends({
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
    if (q) params.set('q', q);

    const url = `${DOMAIN_BACKEND}/movie?${params.toString()}`;
    const res = await fetch(url, { cache: 'no-cache' });

    if (!res.ok) {
        const text = await res.text().catch(() => null);
        let parsed;
        try {
            parsed = text ? JSON.parse(text) : text;
        } catch {
            parsed = text;
        }
        throw new Error(
            `Failed to fetch movies: ${res.status} ${res.statusText} - ${JSON.stringify(parsed)}`,
        );
    }

    const json = await res.json();

    if (
        json &&
        typeof json === 'object' &&
        Array.isArray(json.data) &&
        typeof json.total === 'number'
    ) {
        return { data: json.data, total: json.total };
    }


    if (Array.isArray(json)) {
        return { data: json, total: json.length };
    }

    throw new Error('Unexpected response format from /movie');
}
