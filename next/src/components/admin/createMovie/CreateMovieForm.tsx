import { initialValues } from "@/_data/initialValues";
import { validationSchema } from "@/_data/validationSchema";
import SmallLoader from "@/components/global/smallLoader/SmallLoader";
import { useCreateMovieMutation, } from "@/redux/movie/moviesApiSlice";
import getErrorMessage from "@/utils/getErrorMessage";
import { Formik } from "formik";



export default function CreateMovieForm() {
    const [createMovie, { isLoading, isSuccess, isError, error }] = useCreateMovieMutation()

    return (<>


        {isLoading ? (<SmallLoader />) :
            isError ? (<>
                <p>
                    {getErrorMessage(error)}
                </p>
            </>) : (<>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
                        try {
                            await createMovie(values).unwrap();
                            setStatus(true)
                            resetForm();

                        } catch (err: any) {
                            const error =
                                err.data?.message || 'Error creating movie';
                            console.log(error)

                        }
                    }}
                >
                    {({ errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                        setFieldValue
                    }) => (
                        <>
                            <form onSubmit={handleSubmit} >
                                <div className="grid grid-cols-1 gap-4">

                                    <div className="flex flex-col">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" placeholder="Enter Title Movie" value={values.title} onBlur={handleBlur}
                                            aria-invalid={!!errors.title}
                                            onChange={handleChange}
                                            name="title"
                                            id="title"
                                            aria-required="true" aria-describedby={errors.title ? "title-error" : undefined}

                                            className={`w-full px-4 py-3 rounded-lg border ${errors.title ? "border-red-400" : "border-gray-500"}       focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                                        />
                                        {errors.title && touched.title && (
                                            <p id="title-error" className="mt-1 text-sm text-red-600">{errors.title}</p>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="description">Description</label>
                                        <textarea placeholder="Enter Title Movie" value={values.description} onBlur={handleBlur} onChange={handleChange}
                                            name="description" aria-required="true" id="description"

                                            aria-invalid={!!errors.description}
                                            aria-describedby={errors.description ? "description-error" : undefined}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.description ? "border-red-400" : "border-gray-500"}       focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                                        />
                                        {errors.description && touched.description && (
                                            <p id="description-error" className="mt-1 text-sm text-red-600">{errors.description}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="slug">Slug</label>
                                        <input type="text" placeholder="Enter Slug Movie" value={values.slug} onBlur={handleBlur} onChange={handleChange}
                                            name="slug"
                                            aria-required="true"
                                            aria-invalid={!!errors.slug}
                                            aria-describedby={errors.slug ? "slug-error" : undefined}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.slug ? "border-red-400" : "border-gray-500"}       focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                                        />
                                        {errors.slug && touched.slug && (
                                            <p id="slug-error" className="mt-1 text-sm text-red-600">{errors.slug}</p>
                                        )}
                                    </div>


                                    <div className="flex flex-col">
                                        <label htmlFor="year">Year</label>
                                        <input type="number" placeholder="Enter Title Movie" value={values.year} onBlur={handleBlur} onChange={handleChange}
                                            name="year"
                                            aria-required="true"
                                            aria-invalid={!!errors.year}
                                            aria-describedby={errors.year ? "year-error" : undefined}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.year ? "border-red-400" : "border-gray-500"}       focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                                        />
                                        {errors.year && touched.year && (
                                            <p id="description-error" className="mt-1 text-sm text-red-600">{errors.year}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="category">Category</label>
                                        <input
                                            id="category"
                                            type="text"
                                            aria-required="true"
                                            aria-invalid={!!errors.category}
                                            aria-describedby={errors.category ? "category-error" : undefined}
                                            placeholder="Enter categories (e.g. Action, Drama, Comedy)"
                                            name="category"
                                            value={values.category.join(', ')}
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;

                                                const arrayValue = inputValue
                                                    .split(',')
                                                    .map((s) => s.trim())
                                                    .filter((s) => s.length > 0);

                                                setFieldValue('category', arrayValue);
                                            }}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.category ? 'border-red-400' : 'border-gray-500'
                                                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                                        />

                                        {errors.category && touched.category && (
                                            <p id="category-error" className="mt-1 text-sm text-red-600">{errors.category}</p>
                                        )}
                                    </div>

                                    <button type="submit"
                                        disabled={isLoading || isSubmitting}
                                        className="w-50 border-1 text-white bg-neutral-500 font-semibold
                                        cursor-pointer hover:scale-[1.02] 
                                        m-auto border-gray-700-500 rounded-lg px-4 py-3"
                                    >
                                        {isSubmitting ? 'Submit...' : 'Submit'
                                        }
                                    </button>
                                </div>
                                {isSuccess && (<>
                                    <div className="border p-4 mt-4  border-green-500 text">
                                        <div className="flex items-start space-x-3">
                                            <div>
                                                <h4 className="text-green-800 font-semibold">Success!</h4>
                                                <p className="text-green-600 text-sm">Movie has been created successfully.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>)}

                            </form>
                        </>
                    )}
                </Formik>
            </>)
        }
    </>)
}
