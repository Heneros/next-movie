"use client";

import { useLoginMutation } from "@/redux/auth/authApiSlice";
import { logIn } from "@/redux/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Formik, } from "formik";

import React, { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'

type FormType = {
    email: string;
    password: string;
}


export default function LoginForm({ onClose }: { onClose: () => void }) {
    const [mounted, setMounted] = useState(false);

    const dispatch = useAppDispatch()
    const [error, setError] = useState<string | null>()
    const [showPassword, setShowPassword] = useState(false)


    const handleShowHidePassword = () => {
        setShowPassword(!showPassword);
    };

    const [loginUser, { data, isLoading, isSuccess, isError, }] = useLoginMutation()

    const initialValues: FormType = {
        email: '',
        password: '',
    }

    useEffect(() => {
        setMounted(true)
    }, [])



    return (<>
        <div className="w-full bg-white/90 dark:bg-gray-900/70  backdrop-blur-sm shadow-lg  py-5">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Log In</h2>
                <p>Log in to site and access exclusive data</p>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .max(45)
                        .email()
                        .required('Email is required'),

                    password: Yup.string()
                        .max(45)
                        .required("Password is required"),
                })}
                onSubmit={async (
                    values: FormType,
                    { setStatus, setSubmitting, resetForm }) => {
                    setError(null)
                    try {
                        const data = await loginUser(values).unwrap();
                        const { accessToken, ...userData
                        } = data;

                        dispatch(logIn({
                            user: userData,
                            userToken: accessToken
                        }))
                        setStatus({ success: true });
                        // console.log('Works')
                        resetForm()
                        onClose()
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

                                <div className="w-full relative">
                                    <label htmlFor="password">
                                        Password:
                                    </label>
                                    <input type={showPassword ? 'text' : 'password'} value={values.password} onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.password && touched.password} name="password" placeholder="Your password..." className={`w-full px-4 py-3 rounded-lg border  ${errors.password ? " border-red-400" : "border-gray-200"}
                                            focus:outline-none focus:ring-2 focus:ring-indigo-400
                                            `} />
                                    {errors.password && touched.password && (
                                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                    )}
                                    <button type="button" className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700" onClick={handleShowHidePassword}>
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-col gap-3 my-5 ">
                            <button
                                type="submit"
                                className="flex mx-auto border-1 border-b-blue-900 py-2 px-4 rounded-sm cursor-pointer"
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Log in...' : 'Log in'}
                            </button>
                        </div>
                        {mounted && isError && (
                            <div className="bg-red-50 border border-red-500 text-red-500 px-4 py-3 rounded">
                                Error {error}
                            </div>
                        )}


                    </form>
                )
                }
            </Formik>
        </div >
    </>)
}
