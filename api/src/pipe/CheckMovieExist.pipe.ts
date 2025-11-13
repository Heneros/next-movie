import {
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { MovieRepository } from '@/movies/repository/Movie.repository';

@Injectable()
export class CheckMovieExistPipe implements PipeTransform {
  constructor(private movieRepository: MovieRepository) {}

  async transform(movieId: number) {
    if (!movieId || isNaN(movieId)) {
      throw new BadRequestException('Either movieId must be provided');
    }

    const movie = await this.movieRepository.findByIdUnique(movieId);

    if (!movie) {
      throw new NotFoundException('No movie exists with this id');
    }
    return movieId;
  }
}
