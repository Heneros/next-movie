import { IsNumber, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class RateMovieDto {
  @Type(() => Number)
  @IsNumber({ allowNaN: false })
  @Min(1)
  @Max(5)
  rating: number;
}
