"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import { PROFILE_ROUTES } from '@/_data/sites'
import { linkId } from '@/utils/functions'

export default function SidebarProfile() {
    const pathName = usePathname()
    const params = useParams()
    const userId = parseInt(params.id as string, 10)

    const [dashOpen, setDashOpen] = useState(true)

    return (
        <aside className="bg-white rounded-2xl">
            <div className="flex items-center gap-3 justify-center ">
                <ul className='space-y-3 my-3 '>
                    {PROFILE_ROUTES.map((item) => (
                        <li>
                            <Link href={linkId(userId, item.href)}
                                key={item.label}
                                className='flex cursor-pointer px-3'>
                                {item.label}
                            </Link>
                        </li>
                    ))}



                </ul>
            </div>

        </aside>
    )
}
