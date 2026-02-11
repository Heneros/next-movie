import { IsNumber, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class AddMovieToCollectionDto {
  @IsNotEmpty()
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  @IsNumber()
  movieId: number;
}
