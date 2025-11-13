"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function CookieConsent() {
    const [accept, setAccept] = useState<boolean>(false);
    const cookieName = "CONSENT_DATA";

    useEffect(() => {
        const cookieValue =
            document.cookie.split("; ")
                .find((row) => row.startsWith(`${cookieName}=`));

        if (cookieValue) {
            const value = cookieValue.split("=")[1];
            if (value === "true") {
                setAccept(true)
            }
        }
    }, [])
    const handleAccept = () => {
        document.cookie = `${cookieName}=true; path=/; max-age=${60 * 60 * 24 * 365}`;
        setAccept(true)
    }

    return (

        <AnimatePresence>
            {!accept && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className='fixed bottom-0 right-0 left-0 z-50 w-full
        h-45 bg-black
        border-t- border-gray-700
         dark:bg-gray-800 '>
                    <div className='container mx-auto p-5 flex justify-between items-center gap-4  flex-col md:flex-row'>
                        <p className='text-gray-300 text-center md: md:text-2xl'>
                            This website uses cookies, as do most websites   since the 90s. By using this site, you consent to cookies. We have to say this or we get in trouble.
                            <Link href="/terms-of-use" className='text-green-500 hover:underline '>
                                Learn more.
                            </Link>
                        </p>

                        <button onClick={handleAccept} className='cursor-pointer px-8 md:w-35 py-2 bg-green-500 border text-gray-800 rounded-md font-semibold hover:bg-green-400 transition'>I accept</button>

                    </div>

                </motion.div>
            )}

        </AnimatePresence>

    )
}
