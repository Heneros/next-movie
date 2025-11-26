"use client"

import { Movie } from '@/interfaces';
import { getMovies } from '@/utils/api';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AllMoviesClient() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const page = Math.max(1, Number(searchParams.get('page') ?? 1))
    const limit = Math.max(1, Number(searchParams?.get('limit') ?? 10));

    const [movies, setMovies
    ] = useState<Movie[]>([]);

    const [total, setTotal
    ] = useState(0);
    const [loading, setLoading
    ] = useState(true);
    const [error, setError
    ] = useState<string | null>(null);


    const goToPage = (p: number) => {
        const params = new URLSearchParams();

        params.set('page', String(p));
        params.set('limit', String(limit));
        router.push(`${pathname}?${params.toString()}`)

    }

    useEffect(() => {
        let mounted = true;
        async function loadMovies() {
            try {
                setLoading(true);
                setError(null);
                const moviesResp = await getMovies({
                    page, limit,
                }); if (!mounted) return;

                setMovies(moviesResp.data || [])
                setTotal(moviesResp.total ?? 0);
            } catch (err) {
                if (mounted) setLoading(false)
                setError((err as Error).message || 'Unknown error');
            } finally {
                if (mounted) setLoading(false);

            }
        } loadMovies()
        return () => {
            mounted = false;
        };
    }, [page, limit])

    const totalPages = Math.max(1, Math.ceil(total / limit))
    const start = (page - 1) * limit + 1;
    const end = Math.min(total, page * limit);


    if (loading) return <div className="p-6 " aria-live="polite"
        aria-label="Loading movies">Loading...</div>;
    if (error) return <div className="p-6 text-red-600" role="alert" aria-live="assertive">Error loading movies: {error
    }</div>;


    return (
        <div className="mx-auto max-w-6xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">All Movies</h1>
                <form className='flex gap-2' role='search'>
                    <input type="text" role="search"
                        aria-label="Search movies" placeholder="Search" className='border px-3 py-2 rounded' />
                    <button
                        aria-label='button search'
                        className="bg-indigo-600 text-white px-3 py-2 rounded">Search</button></form>
            </div>
            <div className="overflow-x-auto">
                <table aria-label="Movies list" className='w-full table-auto border-collapse'>
                    <caption className="sr-only">
                        List of movies with details including title, category, rating, and year
                    </caption>   <thead>
                        <tr>
                            <th className="p-2 border">Id</th>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Category</th>
                            <th className="p-2 border">Rating</th>
                            <th className="p-2 border">Year</th>

                        </tr>
                    </thead>
                    <tbody>
                        {movies.length > 0 ? (
                            movies.map((movie: Movie) => (
                                <tr key={movie.id} className='odd:bg-white even:bg-gray-50 '>
                                    <td className="p-2 border  text-center dark:text-def-black">{movie.id
                                    }</td>
                                    <td className="p-2 dark:border> ">
                                        <Link aria-label={`Edit ${movie.title}`} href={`/admin/movie-edit/${movie.id
                                            }`
                                        } className="text-indigo-600 hover:underline   ">
                                            {movie.title
                                            }
                                        </Link>
                                    </td>
                                    <td className="p-2 border text-center dark:text-def-black">{Array.isArray(movie.category) ? movie.category.join(', ') : movie.category
                                    }</td>
                                    <td className="p-2 border text-center dark:text-def-black" >{movie.avgRating ?? '-'
                                    }</td>
                                    <td className="p-2 border text-center dark:text-def-black">{movie.year ?? '-'
                                    }</td>

                                </tr>
                            ))
                        ) : (<tr>
                            <td colSpan={
                                6
                            } className="p-4 text-center text-gray-600">
                                No movies found
                            </td>
                        </tr>)}
                    </tbody>
                </table>

            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                    Showing {start} - {end} of {total}
                </div>
                <nav aria-label='Pagination'>
                    <ul className="inline-flex items-center space-x-2">
                        <li>
                            <button onClick={() => goToPage(Math.max(1, page - 1))}
                                disabled={page <= 1
                                }
                            >Prev</button>
                        </li>
                        {Array.from({ length: totalPages }).map((_, i) => {
                            const p = i + 1;
                            if (Math.abs(p - page) > 5 && p !== 1 && p !== totalPages) return null

                            return (<li key={p
                            }>
                                <button onClick={() => goToPage(p)} className={`px-3 py-1 rounded-border ${p === page ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
                                    aria-current={p === page ? 'page' : undefined}
                                >
                                    {p}
                                </button></li>)
                        })}
                        <li>
                            <button onClick={() => goToPage(Math.min(totalPages, page + 1))} disabled={page >= totalPages
                            } className={`px-3 py-1 rounded border ${page >= totalPages ? 'opacity-50' : 'hover:bg-gray-100'
                                }`}> Next</button>
                        </li>
                    </ul>
                </nav>
            </div>        </div >
    )
}
