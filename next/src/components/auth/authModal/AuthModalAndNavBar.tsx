"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import LoginForm from "../loginForm/LoginForm";
import RegisterForm from "../registerForm/RegisterForm";
import ResetPasswordForm from "../resetPassword/ResetPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose, faCross } from "@fortawesome/free-solid-svg-icons";
import imageBg from '@/assets/img/modal.png'

// import { bgImage } from '@/assets/img/1.jpeg';


type AuthMode = "login" | "reset" | "register";


export function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [mounted, setMounted] = useState(false);
    const [mode, setMode] = useState<AuthMode>("login");
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);


    useEffect(() => {
        if (open || !mounted) setMode("login");
    }, [open, mounted]);

    useEffect(() => {
        if (!open || !mounted) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open, mounted]);



    useEffect(() => {
        if (!mounted || !open) return;


        function onDocMouse(e: MouseEvent) {
            const panel = panelRef.current;
            if (!panel) return;
            if (e.target instanceof Node && !panel.contains(e.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", onDocMouse);
        return () => document.removeEventListener("mousedown", onDocMouse);
    }, [open, mounted, onClose]);

    if (typeof document === "undefined") return null;

    if (!mounted) return null;

    const tabs: { key: AuthMode; label: string }[] = [
        { key: "login", label: "Login" },
        { key: "reset", label: "Reset Password" },
        { key: "register", label: "Registration" },
    ];

    return createPortal(
        <div
            aria-hidden={!open}
            className={`fixed inset-0 z-70 h-full flex items-center justify-center transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="absolute inset-0  dark:bg-black/70 backdrop-blur-sm z-50" />
            <div role="dialog" aria-modal="true" className="auth-modal relative z-50 w-full      max-h-[calc(100vh-4rem)] my-5 mx-4 font-lato text-light-main">

                <div ref={panelRef} className="    bg-[linear-gradient(210deg,#030A1B_95%,#9747FF_100%)]   rounded-2xl shadow-xl overflow-y-auto">

                    <button type="button" aria-label="Close" className=" hover:text-gray-800 dark:hover:text-gray-300 top-5 left-5 relative" onClick={onClose}>
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                    </button>
                    <div className="p-5 sm:p-12">
                        <div className="flex h-[70vh] min-h-[520px] max-h-[720px] items-center justify-between flex-row ">

                            <div className="flex flex-col basis-full w-100 lg:basis-1/3 h-full ">

                                <div className="flex items-center justify-between ">
                                    <div className="flex items-center  h-14 shrink-0" role="tablist" aria-label="Authentication tabs">
                                        {tabs.map((tab) => {
                                            const active = tab.key === mode;
                                            return (
                                                <button
                                                    key={tab.key}
                                                    type="button"
                                                    role="tab"
                                                    aria-selected={active}
                                                    className={`
                                                        px-3 py-1 
                                                     
                                                         transition-colors
                                                        focus:outline-none 
                                                        focus-visible:ring-2
                                                    focus-visible:ring-sky-400
                                                       ${active ? " border-sky-500     border-b-2 " : "hover:border-sky-500 "
                                                        }`}
                                                    onClick={() => setMode(tab.key)}
                                                >
                                                    {tab.label}
                                                </button>
                                            );
                                        })}
                                    </div>


                                </div>
                                <div className="flex-1 overflow-y-auto pr-2 ">
                                    {mode === "login" && (
                                        <div key="login">
                                            <LoginForm onClose={() => onClose()} />
                                        </div>
                                    )}
                                    {mode === "reset" && (
                                        <div key="reset">
                                            <ResetPasswordForm />
                                        </div>
                                    )}
                                    {mode === "register" && (
                                        <div key="register">
                                            <RegisterForm />
                                        </div>
                                    )}

                                </div>

                            </div>
                            <div className="none lg:flex lg:basis-2/3  lg:w-full  ">
                                <div className="min-w-full w-full bg-center bg-cover bg-no-repeat lg:min-h-150   " style={{
                                    backgroundImage: `url(${imageBg.src})`
                                }} />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
