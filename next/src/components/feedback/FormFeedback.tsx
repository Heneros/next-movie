"use client";

import {
    resetForm,
    submitFeedback,
    updateFormData,
} from "@/redux/feedback/feedbackSlice";
import { AppDispatch, RootState } from "@/redux/store";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FormFeedback() {
    const dispatch = useDispatch<AppDispatch>();

    const { formData, errors, status, errorMessage } = useSelector(
        (state: RootState) => state.feedback,
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(updateFormData({ [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(submitFeedback(formData)).then((result) => {
            if (submitFeedback.fulfilled.match(result)) {
                dispatch(resetForm());
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 flex-1/2 text-black bg-[white]"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-black dark:color-[#fff] color-(#fff)">
                Feedback Form
            </h2>
            <div>
                <label
                    htmlFor="email"
                    className="block text-md font-bold text-gray-700"
                >
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full p-2 rounded-sm shadow-sm border-y-1  focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? "border-[red]" : "border-gray-300"
                        } `}
                    required
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-[red]">{errors.email}</p>
                )}
            </div>

            <div className="my-7">
                <label
                    htmlFor="username"
                    className="block text-md font-bold text-gray-700"
                >
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`mt-1 block w-full p-2 rounded-sm shadow-sm border-y-1  focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? "border-[red]" : "border-gray-300"
                        } `}
                    required
                />
                {errors.username && (
                    <p className="mt-1 text-sm text-[red]">{errors.username}</p>
                )}
            </div>

            <div className="my-7">
                <label
                    htmlFor="message"
                    className="block text-md font-bold text-gray-700"
                >
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full p-2 rounded-sm shadow-sm border-y-2  focus:ring-indigo-500 focus:border-indigo-500 ${errors.message ? "border-[red]" : "border-gray-300"
                        } `}
                    required
                    rows={4}
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-[red]">{errors.message}</p>
                )}
            </div>
            <button
                type="submit"
                disabled={status === "loading"}
                className={`p-4 rounded-xl  text-black text-sm btn btn cursor-pointer border-3 border-black  `}
            >
                {status === "loading" ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
