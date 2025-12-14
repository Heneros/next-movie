import Image from "next/image";
import React from "react";

export default function MovieCard({
    title,
    img,
}: {
    title: string;
    img: string;
}) {
    return (
        <div className="w-48 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-[#071026]">
            <div className="relative w-full h-64">
                <Image src={img} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-2">
                <h3 className="text-sm font-medium">{title}</h3>
            </div>
        </div>
    );
}
