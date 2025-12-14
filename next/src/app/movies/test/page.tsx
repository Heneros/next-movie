"use client";
import { Movie, useGetAllMoviesQuery } from "@/redux/api/movieApi";
import React, { useEffect, useMemo, useState } from "react";

const DEBOUNCE_MS = 400;

export default function MoviesPage() {
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(12);
    const [search, setSearch] = useState<string>("");
    const [q, setQ] = useState<string>("");
    const [year, setYear] = useState<number | undefined>(undefined);
    const [category, setCategory] = useState<string | undefined>(undefined);

    useEffect(() => {
        const t = setTimeout(() => setQ(search.trim()), DEBOUNCE_MS);
        return () => clearTimeout(t);
    }, [search]);

    const { data, error, isLoading, isFetching, refetch } =
        useGetAllMoviesQuery({
            page,
            limit,
            q,
            year,
            category,
        });

    const categories = useMemo(() => {
        const cats = new Set<string>();
        data?.data?.forEach((m: Movie) => {
            if (m.category && Array.isArray(m.category)) {
                m.category.forEach((c) => cats.add(c));
            }
        });
        return Array.from(cats);
    }, [data]);

    useEffect(() => {
        setPage(1);
    }, [q, year, category]);

    return <div>page</div>;
}
