// components/global/ThemeToggle/ThemeSync.tsx
"use client";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

export default function ThemeSync({ children }: { children: React.ReactNode }) {
    const theme = useAppSelector((s: RootState) => s.theme.mode);

    useLayoutEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        try {
            localStorage.setItem("theme", theme);
        } catch (err) {
            console.error(err)
        }
    }, [theme]);

    return <>{children}</>;
}
