export interface Actor {
    id: number;
    name: string;
    role?: string;
}
export interface MovieItemUpdate {
    title: string;
    description: string;
    category: string[];
    year: number;
    published: boolean;
}

export interface MovieItem {
    id: number;
    title: string;
    description: string;
    category: string[];
    published: boolean;
    createdAt?: string;
    updatedAt?: string;
    authorId?: number;
    previewId: number | null;
    actorsList: Actor[];
    galleryId?: number | null;
    avgRating: number;
    year: number;
}
export type Movie = {
    id: string | number;
    title: string;
    description?: string;
    avgRating: number;
    year: number;
    category?: string[];
    provider?: string;
};
export interface UpdateMovieArgs {
    movieId: number;
    data: Partial<MovieItem>;
}
