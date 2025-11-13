import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { MovieRepository } from '../repository/Movie.repository';
import {
  BadRequestException,
  HttpExceptionOptions,
  NotFoundException,
} from '@nestjs/common';
import { FindAllMovieQuery } from '../queries';
import { RedisRepository } from '@/redis/redis.repository';
import { RedisService } from '@/redis/redis.service';

@QueryHandler(FindAllMovieQuery)
export class FindAllMoviesHandler implements IQueryHandler<FindAllMovieQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(query: FindAllMovieQuery) {
    const { skip } = query;

    try {
      const movieCached = await this.redisService.getMovies(String(skip));
      if (movieCached) {
        return JSON.parse(movieCached);
      }

      const allMovies = await this.movieRepository.findAllMovie(Number(skip));

      if (allMovies.length === 0) {
        throw new NotFoundException('No movies Exist');
      }
      await this.redisService.saveMovies(String(skip), allMovies);

      return allMovies;
    } catch (error: unknown) {
      console.error(error);
      throw new BadRequestException('Invalid data format', { cause: error });
    }
  }
}
