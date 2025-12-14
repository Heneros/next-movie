import { IsInt, Max, Min } from 'class-validator';

export class RateMovieDto {
  @IsInt()
  @Min(1)
  @Max(10)
  rating: number;
}
