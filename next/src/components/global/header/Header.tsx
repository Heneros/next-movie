"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/Navbar";

import ButtonTheme from "../themeToggle/ButtonToggle";

import { useSelector } from "react-redux";

import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/redux/store";
// import ProfileMenu from "../profileMenu/ProfileMenu";
import { ProfileMenu } from "../profileMenu/ProfileMenu";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

    const theme = useSelector((s: RootState) => s.theme.mode);


    const searchIconPath =
        theme === "dark" ? "/icons/dark/search.svg" : "/icons/light/search.svg";
    const bellIconPath =
        theme === "dark" ? "/icons/dark/bell.svg" : "/icons/light/bell.svg";
    const userIconPath =
        theme === "dark" ? "/icons/dark/user.svg" : "/icons/light/user.svg";
    const logoIconPath =
        theme === "dark" ? "/icons/dark/logo.svg" : "/icons/light/logo.svg";

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        if (mobileOpen) {
            setTimeout(() => firstLinkRef.current?.focus(), 120);
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setMobileOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        function onClick(e: MouseEvent) {
            if (!mobileOpen) return;
            if (!overlayRef.current) return;

            const panel = overlayRef.current;
            const path = e.composedPath();

            const clickedInsideAuthModal = path.some((node: any) => {
                return (
                    node instanceof HTMLElement &&
                    node.classList &&
                    node.classList.contains &&
                    node.classList.contains("auth-modal")
                );
            });
            if (clickedInsideAuthModal) return;

            if (e.target instanceof Node && !panel.contains(e.target as Node)) {
                setMobileOpen(false);
            }
        }
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, [mobileOpen]);

    return (
        <>
            <header className="fixed inset-x-0 top-4 z-50 ">
                <div className="mx-auto max-w-[1115px] ">
                    <div className="relative">
                        <div className="w-full bg-zinc-900/30 outline-sky-500 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between gap-3 shadow-sm">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="flex order-3 md:order-none items-center justify-center"
                            >
                                <Image
                                    src={logoIconPath}
                                    alt="Logo"
                                    width={92}
                                    height={92}
                                    className="w-23 h-23"
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="navbar hidden md:flex justify-start md:ml-18 ml-15 space-x-5 lg:space-x-6">
                                <Navbar />
                            </nav>

                            {/* Right block icons */}
                            <div className="flex-1 flex items-center justify-between px-5 md:px-0 md:justify-end">
                                <div className="flex align-baseline space-x-4">
                                    {/* Search Icon */}
                                    <button className="order-2 md:order-none" aria-label="Search">
                                        <Image
                                            src={searchIconPath}
                                            alt="Search"
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                    </button>

                                    {/* Notification Icon */}
                                    <button className="hidden md:flex" aria-label="Notification">
                                        <Image
                                            src={bellIconPath}
                                            alt="Notifications"
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                    </button>

                                    {/* Profile Menu */}
                                    <div className="hidden md:flex" aria-label="Profile">
                                        <ProfileMenu />
                                    </div>

                                    {/* Dark theme switch */}
                                    <div className="hidden md:flex items-center justify-center">
                                        <ButtonTheme />
                                    </div>

                                    {/* Mobile menu button */}
                                    <button
                                        aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
                                        aria-expanded={mobileOpen}
                                        onClick={() => setMobileOpen((s) => !s)}
                                        className="cursor-pointer flex md:hidden mr-4.5 items-center justify-center rounded-md"
                                    >
                                        <FontAwesomeIcon
                                            icon={faBars}
                                            className="fa-2xl hover:bg-white/5"
                                            style={{ color: theme === "dark" ? "white" : "#000" }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {mobileOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 1 }}
                                    transition={{ duration: 0.15 }}
                                    className="fixed inset-0 z-40"
                                >
                                    <div className="absolute inset-0 bg-black/50" />

                                    <motion.div
                                        ref={overlayRef}
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 right-0 top-4 mx-4 md:mx-auto md:left-[50%] md:-translate-x-1/2 w-[auto] md:w-[min(96%,900px)] bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
                                        role="dialog"
                                        aria-modal="true"
                                        aria-label="Mobile menu"

                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="p-2 rounded-md hover:bg-white/5"
                                                    onClick={() => setMobileOpen(false)}
                                                    aria-label="Close"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faBars}
                                                        style={{
                                                            color: "white",
                                                            transform: "rotate(90deg)",
                                                        }}
                                                    />
                                                </button>
                                                <div className="text-white font-semibold text-lg">
                                                    Menu
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                {/* Bell Icon in Mobile Menu */}
                                                <Image
                                                    src={bellIconPath}
                                                    alt="Notifications"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8"
                                                />

                                                {/* User Icon in Mobile Menu */}
                                                <Image
                                                    src={userIconPath}
                                                    alt="User"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8"
                                                />

                                                <div>
                                                    <ButtonTheme />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Navbar />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>
        </>
    );
}
