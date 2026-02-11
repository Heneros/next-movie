import { Movie } from "@prisma/client";

export interface CreateTokenInput {
  userId: number;
  token: string;
  tempDate: Date;
}


export interface CollectionInterface{
 id: number; title: string; slug: string; posterImage: string; createdAt: Date; updatedAt: Date;
 movies: Movie[]
}