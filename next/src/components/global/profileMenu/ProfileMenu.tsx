import { logOut } from "@/redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";



import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useLogoutMutation } from "@/redux/auth/authApiSlice";
import { SwitcherLang } from '@/components/global/switcherLang/switcherLang';
import Image from "next/image";
import { useTranslations } from "next-intl";

export function ProfileMenu() {
    const t = useTranslations("Navbar")

    const { user, isAuthenticated, isEditor, isAdmin, isLoading } = useAuthGuard();
    const [logoutAction] = useLogoutMutation();
    const theme = useAppSelector((s: RootState) => s.theme.mode);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const panelRef = useRef<HTMLDivElement | null>(null)
    const firstItemRef = useRef<HTMLAnchorElement | null>(null)
    // const UserIcon = theme === "dark" ? DarkUser : '/icons/dark/user.svg';
    const dispatch = useAppDispatch();


    const userIcon = theme === 'dark' ? '/icons/dark/user.svg' : '/icons/light/user.svg';


    useEffect(() => {
        if (open) {
            requestAnimationFrame(() => firstItemRef.current?.focus())
        }
    }, [open])

    useEffect(() => {
        const onKey = (e: any) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);



    const handleLogout = async () => {
        await logoutAction().unwrap();
        dispatch(logOut())
        setOpen(false);
        router.replace("/");
    };

    const menuVariants = {
        hidden: { opacity: 0, scale: 0.95, y: -6 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -4 },
    }

    // console.log(isAuthenticated)

    return (<div className="relative hidden md:inline-flex"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
    >
        <button
            aria-expanded={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            className="flex items-center justify-center focus:outline-non0"
        >
            {/* <UserIcon className="w-8 h-8" /> */}
            <Image
                src={userIcon}
                alt="user Icon"
                width={32}
                height={32}
                className="w-8 h-8"
            />
        </button>
        <AnimatePresence>
            {open && isAuthenticated && !isLoading && (
                <motion.div
                    ref={panelRef}
                    key="profile-menu"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    role="menu"
                    aria-label="Profile menu"
                    className="absolute right-0 top-10 ml-20 w-40 dark:bg-white  bg-black/60 backdrop-blur-md border border-white rounded-md   "
                >
                    <ul className="p-2 text-center">
                        <li>
                            <Link href={`/profile/${user?.id}`}
                                ref={firstItemRef}
                                className="block px-4 text-white dark:text-black py-2 text-sm hover:bg-black/5
                            focus:bg-black/5 focus:outline-none "
                                onClick={() => setOpen(false)}
                            >
                                {t("profile")}
                            </Link>
                        </li>
                        {/*  Switcher language */}
                        <SwitcherLang />

                        {(isAdmin || isEditor) && (
                            <li>
                                <Link
                                    href="/admin/dashboard"
                                    className="block text-white dark:text-black px-4 py-2 text-sm hover:bg-black/5
                            focus:bg-black/5 focus:outline-none "
                                    onClick={() => setOpen(false)}
                                >
                                    {t("admin")}
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link
                                href="#!"
                                onClick={handleLogout}
                                className="block text-white dark:text-black px-4 py-2 text-sm hover:bg-black/5
                            focus:bg-black/5 focus:outline-none "
                            >
                                {t("logout")}
                            </Link>
                        </li>
                    </ul>
                </motion.div>)}
        </AnimatePresence>

    </div >)
}
