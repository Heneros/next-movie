"use client";

import { useRegistrationMutation } from "@/redux/auth/authApiSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

import React, { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import Link from 'next/link';


type FormType = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
    submit?: null
}


export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [mounted, setMounted] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState<string | null>()
    const handleShowHidePassword = () => {
        setShowPassword(!showPassword);
    };


    const handleShowHideConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const [registerUser, { data, isLoading, isSuccess, isError, }] = useRegistrationMutation()


    const initialValues: FormType = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',


    }

    useEffect(() => {
        setMounted(true)
    }, [])




    return (<>
        <div className="w-full mt-20 p-5">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">Registration Page</h2>
                <p>Create an account and start using the service</p>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .max(45)
                        .email()
                        .required('Email is required'),
                    username: Yup.string()
                        .max(66)
                        .required('Username  is required'),
                    password: Yup.string()
                        .max(45)
                        .required("Password is required"),
                    passwordConfirm: Yup.string()
                        .oneOf([Yup.ref("password")],
                            'Passwords must match',
                        )
                        .required('Please confirm your password'),
                })}
                onSubmit={async (
                    values: FormType,
                    { setStatus, setSubmitting, resetForm }) => {
                    setError(null)
                    try {
                        await registerUser(values).unwrap();
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
                                    <label htmlFor="username">
                                        Username:
                                    </label>
                                    <input type="text" value={values.username} onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.username && touched.username} name="username" placeholder="Enter your username" className={`w-full px-4 py-3 rounded-lg border  ${errors.username ? " border-red-400" : `border-gray-200`}
                                            focus:outline-none focus:ring-2 focus:ring-indigo-400
                                            `} />
                                    {errors.username && touched.username && (
                                        <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                                    )}

                                </div>
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

                                <div className="relative w-full">
                                    <label htmlFor="passwordConfirm">
                                        Confirm Password:
                                    </label>
                                    <input type={showConfirmPassword ? 'text' : 'password'} value={values.passwordConfirm} onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.passwordConfirm && touched.passwordConfirm} name="passwordConfirm" placeholder="Your password..." className={`w-full px-4 py-3 rounded-lg border  ${errors.passwordConfirm ? " border-red-400" : "border-gray-200"}
                                            focus:outline-none focus:ring-2 focus:ring-indigo-400
                                            `} />
                                    {errors.passwordConfirm && touched.passwordConfirm && (
                                        <p className="mt-1 text-sm text-red-600">{errors.passwordConfirm}</p>
                                    )}
                                    <button type="button" className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700" onClick={handleShowHideConfirmPassword}>
                                        {showConfirmPassword ? 'Hide' : 'Show'}
                                    </button>



                                </div>

                            </div>

                        </div>
                        <div className="flex items-center flex-col gap-3 my-5 ">
                            <p className="font-sans text-sm sm:text-xl ">I agree with  <Link
                                className="font-bold mr-2 "
                                href="/terms-of-use">Terms of use</Link>
                                <input type="checkbox" value="" className="w-4 h-4" required />
                            </p>
                            <button
                                type="submit"
                                className="flex mx-auto 
                                bg-primary-second
                                max-w-160
                                w-40
                                h-12
                                justify-center
                                items-center
                                        max-h-46
                                border-2 border-[#8FD3FF]
    rounded-lg

                                    transition
    hover:brightness-110
    disabled:opacity-60
    disabled:cursor-not-allowed
                  cursor-pointer"
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Creating account...' : 'Submit'}
                            </button>
                        </div>

                        {mounted && isError && (
                            <div className="bg-red-50 border border-red-500 text-red-500 px-4 py-3 rounded">
                                Error {error}
                            </div>
                        )}

                        {isSuccess && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                                Registration successful! Please check your email.
                            </div>
                        )}
                    </form>
                )
                }
            </Formik>
        </div>
    </>)
}
