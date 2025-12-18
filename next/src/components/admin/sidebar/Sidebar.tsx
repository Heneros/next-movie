"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { useAppSelector } from '@/redux/hooks';
import { RootState } from "@/redux/store";
import Image from "next/image";

import { ANALYTICS_ROUTES, DASHBOARD_ROUTES } from "@/_data/sites";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isActive } from "@/utils/functions";
import SmallLoader from "@/components/global/smallLoader/SmallLoader";

export default function Sidebar() {
    const pathName = usePathname()

    const user = useAppSelector((s: RootState) => s.auth.user);

    if (!user) return <div><SmallLoader /></div>;

    const { username, imageUrl, email, role } = user;



    const [dashOpen, setDashOpen] = useState(true)
    const [analyticsopen, setAnalytOpen] = useState(true)

    // console.log(user)
    return (
        <>
            <aside className="hidden lg:block w-60 pr-4 bg-white">
                <div className="flex items-center gap-3 mb-6 px-3 py-3 rounded-xl bg-white/70  border border-white/10 backdrop-blur-md">
                    <div className="w-9 h-9 rounded-md">
                        {imageUrl ? (
                            <Image src={imageUrl} alt={username} />
                        ) : (<>Test</>)}
                    </div>
                    <div>
                        <div className="text-sm font-semibold">{username}</div>
                        <div className="text-xs text-gray-500">{email}</div>
                    </div>
                </div>
                <div className="px-1 mb-3 bg-white">
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-3">
                        Admin panel
                    </div>


                    {/* Dashboard */}
                    <div className="mb-4">
                        <button
                            onClick={() => setDashOpen((s) => !s)}
                            className="w-full text-lg  p-5 flex items-center justify-between px-3 py-1.7 rounded-md hover:bg-white/7
                            cursor-pointer"
                        >
                            Dashboard
                            <span className="text-gray-400 text-sm">
                                {dashOpen ? "<" : ">"}
                            </span>
                        </button>
                        <div className={`mt-2 space-y-2 ${!dashOpen && "hidden"} `}>
                            {DASHBOARD_ROUTES.map((d) => (
                                <Link
                                    key={d.label}
                                    href={d.href || ''}
                                    className={` flex items-center gap-3 px-3 py-2 ${isActive(pathName, d.href) ? 'bg-white text-gray-600 font-semibold' : 'text-gray-500 hover:bg-white/5'} `}
                                >
                                    {d.icon ? (<FontAwesomeIcon icon={d.icon} />) : null}
                                    {d.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Analytics */}
                    <div className="mb-4">
                        <button
                            onClick={() => setAnalytOpen((s) => !s)}
                            className="w-full text-lg  p-5 flex items-center justify-between px-3 py-1.7 rounded-md hover:bg-white/7
                            cursor-pointer"
                        >
                            Analytics
                            <span className="text-gray-400 text-sm">
                                {analyticsopen ? "<" : ">"}
                            </span>
                        </button>
                        <div className={`mt-2 space-y-2 ${!analyticsopen && "hidden"} `}>
                            {ANALYTICS_ROUTES.map((d) => (
                                <Link
                                    key={d.label}
                                    href={d.href || ''}
                                    className={` flex items-center gap-3 px-3 py-2 ${isActive(pathName, d.href) ? 'bg-white text-gray-600 font-semibold' : 'text-gray-500 hover:bg-white/5'} `}
                                >
                                    {d.icon ? (<FontAwesomeIcon icon={d.icon} />) : null}
                                    {d.label}
                                </Link>
                            ))}
                        </div>
                    </div>



                </div>

                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>

            </aside >

            {/* <aside className="block lg:hidden w-100 h-35"> */}
            <aside className="lg:hidden fixed inset-x-0 bottom-0 z-50 " >
                <div className="mx-auto w-auto bg-amber-700 p-4">
                    Mobile Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae fugiat nostrum facere aliquam, distinctio natus minima atque aut? Similique cupiditate, quod omnis explicabo ipsa tempora itaque nulla consectetur earum repudiandae facere. Error fugit, ea consectetur quos iste voluptatem non inventore? Optio, accusantium. {pathName}
                </div>
            </aside>
        </>
    )

}