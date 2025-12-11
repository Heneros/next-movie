"use client"

import { useAuthMeQuery, useLogoutMutation } from "@/redux/auth/authApiSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AuthModal } from "../../auth/authModal/AuthModalAndNavBar";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/auth/authSlice";
import { AbstractIntlMessages, useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations("Navbar")
    const dispatch = useAppDispatch()
    const [mounted, setMounted] = useState(false);

    const { data: info, isLoading, isFetching, isError } = useAuthMeQuery(
        undefined,
        {
            refetchOnMountOrArgChange: true,
            skip: !mounted,
        });


    const [logoutAction] = useLogoutMutation();
    const [open, setOpen] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])


    const logoutHandler = async () => {
        await logoutAction().unwrap();
        dispatch(logOut())
    };


    const isAuthenticated = mounted && !isLoading && !isError && !!info?.user



    return (
        <>
            <Link
                className="
                capitalize text-gray-900 dark:text-gray-100  border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                href={`/`}
            >
                {t("home")}
            </Link>
            <Link
                className="capitalize text-gray-900 dark:text-gray-100  border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                href={`/contact-us`}
            >
                {t("contactUs")}
            </Link>
            <Link
                className="capitalize text-gray-900 dark:text-gray-100  border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                href={`/faq`}

            >
                {t("faq")}
            </Link>
            <Link
                className="capitalize text-gray-900 dark:text-gray-100  border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                href={`/movies`}
            >
                {t("movies")}
            </Link>
            {isAuthenticated && !isLoading ? (<>
                <Link className="capitalize text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" href={`/profile/${info?.user?.id}`} >   {t("profile")} </Link>

                <Link className="capitalize block md:hidden text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" href={`/admin/dashboard`} >  {t("admin")}  </Link>

                <Link onClick={logoutHandler} className="capitalize text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" href={`/`} >  {t("logout")} </Link >
            </>) : (<>
                <Link onClick={() => setOpen(true)} className="capitalize text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-sky-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" href={`/`} > {t("registration")} </Link >
                <AuthModal open={open} onClose={() => setOpen(false)} />
            </>)}

        </>
    );
}
