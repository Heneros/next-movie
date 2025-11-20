import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { MovieRepository } from '../repository/Movie.repository';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { FindAllMovieQuery } from '../queries';
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
    const { offset = 0, limit = PAGINATION_LIMIT, page = 1 } = query;
    ///  const skip = (page - 1) * PAGINATION_LIMIT;
    try {
      const cacheKey = `${page}:limit:${limit}`;
      const movieCached = await this.redisService.getMovies(cacheKey);
      if (movieCached) {
        return JSON.parse(movieCached);
      }

      const [data, total] = await this.movieRepository.findAllMovie(
        offset,
        limit,
      );

      if (data.length === 0) {
        throw new NotFoundException('No movies Exist');
      }
      await this.redisService.saveMovies(cacheKey, data, CACHE_TTL.ONE_MINUTE);

      return { data, total };
    } catch (error: unknown) {
      console.error(error);
      throw new BadRequestException('Invalid data format', { cause: error });
    }
  }
}
