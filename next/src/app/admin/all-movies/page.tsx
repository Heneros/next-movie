import { getTrends } from "@/utils/api"
import Link from "next/link"
import { Suspense } from "react"

export default async function AllMovies() {
    const movies = await getTrends()

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
                        {movies.map((movie) => (
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