export interface Actor {
    id: number;
    name: string;
    role?: string;
}

export interface MovieItem {
    id: number;
    title: string;
    description: string;
    category: string[];
    published: boolean;
    createdAt: string;
    updatedAt: string;
    authorId: number;
    previewId: number | null;
    actorsList: Actor[];
    galleryId: number | null;
    avgRating: number;
    year: number;
}
