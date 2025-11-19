import { MovieItem } from "@/interfaces";
import { getTrends, } from "@/utils/api"
import Link from "next/link"
import { Suspense } from "react"

interface Props {
    searchParams?: { page?: string; limit?: string; q?: string };

}

export default async function AllMovies({ searchParams }: Props) {
    const page = Math.max(1, Number(searchParams?.page ?? 1))
    const limit = Math.max(1, Number(searchParams?.limit ?? 20));
    const q = searchParams?.q ?? "";
    const { movies, total } = await getTrends({ page, limit, q })

    const totalPages = Math.max(1, Math.ceil(total / limit));
    const start = (page - 1) * limit + 1;
    const end = Math.min(total, page * limit);

    console.log(movies)
    return (
        <>
            <Suspense fallback={'Loading...'}>
                <div className="mx-auto w-2/5 flex justify-center my-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-900 w-full py-2 pl-2"
                        name="search"
                    />
                </div>

                <table className="w-full border border-collapse table-auto border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300">Id</th>
                            <th className="border border-gray-300">Title</th>
                            <th className="border border-gray-300">Category</th>
                            <th className="border border-gray-300">Rating</th>
                            <th className="border border-gray-300">Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies?.map((movie: MovieItem) => (
                            <tr key={movie.id}>
                                <td className="text-center text-lg border border-gray-300 dark:border-gray-700 py-4">
                                    {movie.id}
                                </td>
                                <td className="text-center text-lg border border-gray-300 dark:border-gray-700">
                                    <Link href={`/admin/movie-edit/${movie.id}`}>
                                        {movie.title}
                                    </Link>

                                </td>
                                <td className="text-center text-lg border border-gray-300 dark:border-gray-700">
                                    {movie.category ? movie.category.map((item) => item.split(', ')) : null}
                                </td>
                                <td className="text-center text-lg border border-gray-300 dark:border-gray-700">
                                    {movie.avgRating}
                                </td>
                                <td className="text-center text-lg border border-gray-300 dark:border-gray-700">
                                    {movie.year}
                                </td>
                                <td className="text-center text-lg border border-gray-300 dark:border-gray-700">

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Suspense>
        </>
    )
}