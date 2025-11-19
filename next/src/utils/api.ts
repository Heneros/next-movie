import { DOMAIN_BACKEND } from '@/_data/constants';

export async function getTrends({
    page = 1,
    limit = 20,
    q = '',
}: {
    page?: number;
    limit?: number;
    q?: string;
} = {}) {
    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('limit', String(limit));
    if (q) params.set('q', q);
    const url = `${DOMAIN_BACKEND}/movie?${params.toString()}`;

    const res = await fetch(url, {
        // next: { revalidate: 60 },
        cache: 'no-cache',
    });
    if (!res.ok) throw new Error('Failed to fetch movies: ' + res.status);
    const json = await res.json();

    return json;
}
