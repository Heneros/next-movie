import React from "react";

type BreadcrumbItem = {
    label: string;
    href?: string;
};
type BreadcrumbItemProp = {
    items: BreadcrumbItem[];
    bgImage?: string;
};

export default function Breadcrumbs({ items, bgImage }: BreadcrumbItemProp) {
    return (
        <nav
            className="w-auto h-100  flex items-center bg-cover bg-center justify-center bg-yellow  text-darkGray "
            style={{
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
            }}
        >
            <ol className="flex py-4 items-center space-x-2 text-4xl font-bold  dark:text-white text-gray-600">
                <li className="flex items-center">
                    <a href="/" className=""> Homepage</a>
                </li>
                <li className="flex items-center">/</li>
                {items?.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                        {item.href ? (
                            <a href={item.href} className="">{item.label}</a>
                        ) : (
                            <span className="">{item.label} </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
