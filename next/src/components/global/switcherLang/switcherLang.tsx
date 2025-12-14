"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export function SwitcherLang() {
    const [locale, setLocale] = useState<string>("")

    const router = useRouter();

    useEffect(() => {
        const cookieLocale = document.cookie
            .split("; ")
            .find((row) => row.startsWith("MOVIE_LOCALE="))
            ?.split("=")[1]
        if (cookieLocale) {
            setLocale(cookieLocale)
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `MOVIE_LOCALE=${browserLocale}`
            router.refresh()
        }
    }, [router])

    const changeLocale = (newLocale: string) => {
        setLocale(newLocale)
        document.cookie = `MOVIE_LOCALE=${newLocale}`;
        router.refresh()
    }
    return (
        <div className="flex items-center gap-4">
            {["en", "de"].map((lang) => (
                <button
                    key={lang}
                    onClick={() => changeLocale(lang)}
                    className={`relative px-5 py-2 rounded-xl font-semibold border 
        transition-all duration-300
        ${locale === lang
                            ? "bg-gradient-to-r bg-def-black text-white shadow-lg shadow-[#228EE5]-500/30 border-transparent"
                            : "bg-transparent  text-white  dark:text-gray-200 border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

