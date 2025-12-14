"use client";

import { useRequestResetPasswordMutation } from '@/redux/auth/authApiSlice';
import { Formik } from 'formik';
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import Link from 'next/link';

type FormType = {
    email: string;
}


export default function ResetPasswordForm() {
    const [error, setError] = useState<string | null>()
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [mounted, setMounted] = useState(false);

    const [requestResetPass, { data, isLoading, isSuccess, isError, }] = useRequestResetPasswordMutation()


    useEffect(() => {
        setMounted(true)
    }, [])

    const initialValues: FormType = {

        email: '',
    }


    return (<>
        <div className="w-full bg-white/90 dark:bg-gray-900/70  backdrop-blur-sm shadow-lg  p-5">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Request Reset Password</h2>
                <p>Update password</p>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .max(45)
                        .email()
                        .required('Email is required'),

                })}
                onSubmit={async (
                    values: FormType,
                    { setStatus, setSubmitting, resetForm }) => {
                    setError(null)
                    try {
                        await requestResetPass(values).unwrap();
                        setStatus({ success: true });
                        resetForm()
                    } catch (err: any) {
                        setError(err.data.message)
                        setStatus({ success: false });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                }) => (
                    <form onSubmit={handleSubmit} className="sm:px-4">

                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-4  ">

                                <div className="flex flex-col">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.email && touched.email} name="email" placeholder="Your email" className={`w-full px-4 py-3 rounded-lg border  ${errors.email ? " border-red-400" : "border-gray-200"}
                                            focus:outline-none focus:ring-2 focus:ring-indigo-400
                                            `} />
                                    {errors.email && touched.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>



                            </div>

                        </div>
                        <div className="flex items-center flex-col gap-3 my-5 ">

                            <button
                                type="submit"
                                className="flex mx-auto border-1 border-b-blue-900 py-2 px-4 rounded-sm cursor-pointer"
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Sending...' : 'Send'}
                            </button>
                        </div>

                        {mounted && isError && (
                            <div className="bg-red-50 border border-red-500 text-red-500 px-4 py-3 rounded">
                                Error {error}
                            </div>
                        )}

                        {isSuccess && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                                Link was send successfully. Please check your email.
                            </div>
                        )}
                    </form>
                )
                }
            </Formik>
        </div>
    </>)
}