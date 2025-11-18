
"use client"
import { MovieItem } from '@/interfaces'
import { useUpdateMovieMutation } from '@/redux/movie/moviesApiSlice'
import { Formik } from 'formik'
import Link from 'next/link'
import React from 'react'

const getInitialValues = (movie: MovieItem) => {
    return {
        title: movie.title || '',
        description: movie.description || '',
        year: movie.year,
        category: movie.category

    }
}

export default function MovieEditForm({ movieItem }: { movieItem: MovieItem }) {
    const [updateMovie, { data, isLoading, isSuccess, isError, }] = useUpdateMovieMutation()

    return (
        <div className=''>
            <div className='flex justify-between'>
                <Link
                    className="dark:text-emerald-300 text-blue-600 hover:underline mb-6 "
                    href={`/movie/${movieItem.id}`}>
                    Check movie
                </Link>
                {movieItem.title}
            </div>

            <Formik enableReinitialize
                initialValues={getInitialValues(movieItem)}
                onSubmit={async (values,
                    { setSubmitting, setStatus, resetForm },) => {
                    try {
                        await updateMovie({
                            movieId: movieItem.id,
                            data: values
                        }).unwrap()
                        setStatus({ success: true });
                    } catch (error) {
                        console.error(error)
                        setStatus({ success: true });
                        setSubmitting(false);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    isSubmitting,
                    isValid,
                    handleSubmit,
                    setFieldValue,
                }) => (<>

                    <form className='space-y-6' noValidate autoComplete='off' onSubmit={handleSubmit}>

                        <div className="flex flex-col">
                            <label htmlFor='title' className="block font-extrabold text-2xl mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder='Title Movie'
                                value={values.title}
                                onChange={handleChange}
                                className="w-full dark:text-white  border rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='description' className="block font-extrabold text-2xl mb-1">
                                Description
                            </label>
                            <textarea
                                rows={3}
                                cols={50}
                                name="description"
                                placeholder='Description Movie'
                                value={values.description}
                                onChange={handleChange}
                                className="w-full dark:text-white  border rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-400"
                            >
                            </textarea>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='year' className="block font-extrabold text-2xl mb-1">
                                Year
                            </label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={values.year}
                                onChange={handleChange}
                                className="w-full dark:text-white  border rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-400"
                            />

                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='category' className="block font-extrabold text-2xl mb-1">
                                Categories
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                                className="w-full dark:text-white  border rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-400"
                            />

                        </div>

                        <div className="flex items-center flex-col gap-3 my-5 ">
                            <button
                                type="submit"
                                className="flex mx-auto border-1 border-b-blue-900 py-2 px-4 rounded-sm cursor-pointer"
                                aria-disabled={isSubmitting}
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Editing...' : 'Edit movie'}
                            </button>
                        </div>
                    </form>
                </>)}
            </Formik>
        </div >
    )
}
