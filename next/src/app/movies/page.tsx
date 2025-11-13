import Breadcrumbs from "@/components/global/Breadcrumbs";
import bgImage from "@/assets/img/1.jpeg";
import MoviesClient from "./MoviesClient";

export default async function Movies({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams.page) || 1;

    return (
        <>
            <Breadcrumbs
                bgImage={bgImage.src}
                items={[{ label: "Movies", href: "/movies" }]}
            />
            <MoviesClient page={page} />
        </>
    );
}
