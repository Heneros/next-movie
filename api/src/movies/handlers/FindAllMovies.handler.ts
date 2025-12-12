import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { MovieRepository } from '../repository/Movie.repository';
import { BadRequestException, Logger, NotFoundException } from '@nestjs/common';
import { FindAllMovieQuery } from '../queries';
import { RedisService } from '@/redis/redis.service';
import { CACHE_TTL } from '@/data/ttl';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';

@QueryHandler(FindAllMovieQuery)
export class FindAllMoviesHandler implements IQueryHandler<FindAllMovieQuery> {
  ///  private readonly logger = new Logger(FindAllMoviesHandler.name);
  constructor(
    private readonly redisService: RedisService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(query: FindAllMovieQuery) {
    const { offset = 0, limit = PAGINATION_LIMIT, page = 1, filters } = query;
    ///  const skip = (page - 1) * PAGINATION_LIMIT;


    try {
    const cacheKey = `movies:page:${page}:limit:${limit}:offset:${offset}:filters:${JSON.stringify(filters)}`;
      const movieCached = await this.redisService.getMovies(cacheKey);
      if (movieCached) {
        // console.log(movieCached);
        return movieCached;
      }
      
      const [data, total] = await this.movieRepository.findAllMovie(
        offset,
        limit,
        filters
      );

      // if (data.length === 0) {
      //   throw new NotFoundException('No movies Exist 5555');
      // }
      const res = { data, total };

      // console.log(res);
      await this.redisService.saveMovies(cacheKey, res, CACHE_TTL.ONE_MINUTE);

      return res;
    } catch (error: unknown) {
      console.error('FindAllMoviesHandler error q:', error);
      

      if (error instanceof Error) {
        throw new BadRequestException(`Database error: ${error.message}`);
      }
      
      throw new BadRequestException('Unknown error occurred');
    }
  }
}
