export interface GalleryImageResponse {
  id: number;
  url: string;
  publicId: string;
  altText?: string;
  order: number;
  movieId: number;
  createdAt: Date;
}
