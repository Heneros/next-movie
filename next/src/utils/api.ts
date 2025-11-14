import { DOMAIN_BACKEND } from '@/_data/constants';

export type Movie = {
    id: string | number;
    title: string;
    description?: string;
    avgRating: number;
    year: number;
    category?: string[];
    provider?: string;
};

export async function getTrends(months = 1) {
    const res = await fetch(`${DOMAIN_BACKEND}/movie`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Failed to fetch trends: ' + res.status);
    const json = (await res.json()) as Movie[];
    return json;
}
