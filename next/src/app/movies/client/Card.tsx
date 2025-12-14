"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MovieItem } from "@/interfaces";
import { useGetPreviewQuery } from "@/redux/movie/moviesApiSlice";
import Link, { useLinkStatus } from "next/link";
import Skeleton from "react-loading-skeleton";

export default function Card({ item }: { item: MovieItem }) {
    const [active, setActive] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const { data: image, isLoading } = useGetPreviewQuery(item.previewId);
    const { pending } = useLinkStatus();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
                <Skeleton height={256} />
                <div className="p-4">
                    <Skeleton height={24} width="80%" />
                    <Skeleton height={20} width="60%" />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-2xl duration-500 rounded-2xl overflow-hidden hover:shadow-3xl">
            {pending && (
                <div className="absolute top-2 left-2 z-10">
                    <button className="px-2 py-1 bg-yellow-500 text-xs font-medium rounded">
                        Loading...
                    </button>
                </div>
            )}

            <div className="relative h-64 w-full bg-black">
                {isLoading ? (
                    <Skeleton height={256} />
                ) : image?.url ? (
                    <Image
                        src={image.url}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-yellow-500 text-sm">
                        No Image
                    </div>
                )}
            </div>
            <p className="px-4 text-sm font-semibold text-gray-800 mt-3">
                ⭐ {item.avgRating || "No rated yet"}
            </p>
            <div className="p-4 flex flex-col justify-between min-h-[140px]">
                <h3 className="text-black text-2xl font-semibold mb-2">
                    <Link
                        prefetch={active ? null : false}
                        href={`/movies/${item.id}`}
                        className="hover:text-blue-600"
                        onMouseEnter={() => setActive(true)}
                    >
                        {item.title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-700">{item.category}</p>
                <></>
            </div>
        </div>
    );
}
