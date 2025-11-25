
import { getMovies } from '@/utils/api';
import Link from 'next/link';
import type { Movie } from '@/interfaces';

interface Props {
    searchParams?: { page?: string; limit?: string; q?: string };
}

export default async function AllMovies({ searchParams }: Props) {
    const page = Math.max(1, Number(searchParams?.page ?? 1));
    const limit = Math.max(1, Number(searchParams?.limit ?? 10));
    const q = await searchParams?.q ?? '';

    let moviesResp;
    try {
        moviesResp = await getMovies({ page, limit, q });
    } catch (err) {
        console.error('getMovies error', err);
        return <div className="p-6 text-red-600">Error loading movie: {(err as Error).message}</div>;
    }


    const { movies, total } = moviesResp;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const start = (page - 1) * limit + 1;
    const end = Math.min(total, page * limit);


    console.log(movies)
    return (
        <div className="mx-auto max-w-6xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">All Movies</h1>
                <form method="get" className="flex gap-2" role="search">
                    <input name="q" defaultValue={q} placeholder="Search" className="border px-3 py-2 rounded" />
                    <input type="hidden" name="page" value="1" />
                    <button className="bg-indigo-600 text-white px-3 py-2 rounded">Search</button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="p-2 border">Id</th>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Category</th>
                            <th className="p-2 border">Rating</th>
                            <th className="p-2 border">Year</th>
                            <th className="p-2 border" />
                        </tr>
                    </thead>
                    <tbody>
                        {movies ? (
                            movies.map((movie: Movie) => (
                                <tr key={movie.id} className="odd:bg-white even:bg-gray-50">
                                    <td className="p-2 border text-center">{movie.id}</td>
                                    <td className="p-2 border">
                                        <Link href={`/admin/movie-edit/${movie.id}`} className="text-indigo-600 hover:underline">
                                            {movie.title}
                                        </Link>
                                    </td>
                                    <td className="p-2 border text-center">{Array.isArray(movie.category) ? movie.category.join(', ') : movie.category}</td>
                                    <td className="p-2 border text-center">{movie.avgRating ?? '-'}</td>
                                    <td className="p-2 border text-center">{movie.year ?? '-'}</td>
                                    <td className="p-2 border text-center" />
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="p-4 text-center text-gray-600">No movies</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">Showing {start}–{end} of {total}</div>

                <nav aria-label="Pagination">
                    <ul className="inline-flex items-center space-x-2">
                        <li>
                            <Link
                                href={`?page=${Math.max(1, page - 1)}&limit=${limit}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                                className={`px-3 py-1 rounded border ${page <= 1 ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-100'}`}
                                aria-disabled={page <= 1}
                            >
                                Prev
                            </Link>
                        </li>

                        {Array.from({ length: totalPages }).map((_, i) => {
                            const p = i + 1;
                            if (Math.abs(p - page) > 5 && p !== 1 && p !== totalPages) return null;
                            return (
                                <li key={p}>
                                    <Link
                                        href={`?page=${p}&limit=${limit}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                                        className={`px-3 py-1 rounded border ${p === page ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
                                        aria-current={p === page ? 'page' : undefined}
                                    >
                                        {p}
                                    </Link>
                                </li>
                            );
                        })}

                        <li>
                            <Link
                                href={`?page=${Math.min(totalPages, page + 1)}&limit=${limit}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                                className={`px-3 py-1 rounded border ${page >= totalPages ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-100'}`}
                                aria-disabled={page >= totalPages}
                            >
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
