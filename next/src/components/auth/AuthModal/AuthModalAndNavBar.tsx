"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LoginForm from "../loginForm/LoginForm";
import RegisterForm from "../registerForm/RegisterForm";
import ResetPasswordForm from "../resetPassword/ResetPassword";


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
            className={`fixed inset-0 z-70 flex items-center justify-center transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50" />
            <div role="dialog" aria-modal="true" className="auth-modal relative z-50 w-full max-w-md mx-4">
                <div ref={panelRef} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b  border-gray-700">
                        <div className="flex items-center gap-2" role="tablist" aria-label="Authentication tabs">
                            {tabs.map((tab) => {
                                const active = tab.key === mode;
                                return (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        className={`px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 ${active ? "bg-sky-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                        onClick={() => setMode(tab.key)}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        <button type="button" aria-label="Close" className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300" onClick={onClose}>
                            ✕
                        </button>
                    </div>

                    <div className="p-5 sm:p-12">
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
            </div>
        </div>,
        document.body
    );
}
