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
import { CACHE_TTL } from '@/data/ttl';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';

@QueryHandler(FindAllMovieQuery)
export class FindAllMoviesHandler implements IQueryHandler<FindAllMovieQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(query: FindAllMovieQuery) {
    const { page } = query;
    const skip = (page - 1) * PAGINATION_LIMIT;
    try {
      const movieCached = await this.redisService.getMovies(String(skip));
      if (movieCached) {
        return JSON.parse(movieCached);
      }

      const allMovies = await this.movieRepository.findAllMovie(
        Number(skip),
        PAGINATION_LIMIT,
      );

      if (allMovies.length === 0) {
        throw new NotFoundException('No movies Exist');
      }
      await this.redisService.saveMovies(
        String(page),
        allMovies,
        CACHE_TTL.ONE_MINUTE,
      );

      return allMovies;
    } catch (error: unknown) {
      console.error(error);
      throw new BadRequestException('Invalid data format', { cause: error });
    }
  }
}
