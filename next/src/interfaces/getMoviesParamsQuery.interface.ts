export interface GetMoviesParams {
  page?: number;
  limit?: number;
  category?: string;
  year?: number;
  minRating?: number;
  orderBy?: string; 
  order?: string
}
