import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetIdMovieQuery } from '../queries/GetIdMovieQuery.query';
import { MovieRepository } from '../repository/Movie.repository';
import {
  BadRequestException,
  HttpExceptionOptions,
  NotFoundException,
} from '@nestjs/common';
import { RedisService } from '@/redis/redis.service';

@QueryHandler(GetIdMovieQuery)
export class FindOneMovieHandler implements IQueryHandler<GetIdMovieQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(query: GetIdMovieQuery) {
    const { movieId } = query;

    try {
      const movieKey = `movie:id:${movieId}`;
      const movieCached = await this.redisService.getId(movieKey);

      if (movieCached) {
        return JSON.parse(movieCached);
      }

      const movieIdResult = await this.movieRepository.findByIdUnique(movieId);
      if (!movieIdResult) {
        throw new NotFoundException(`Movie don\'t exist', ${movieIdResult}`);
      }

      await this.redisService.saveDataItem(String(movieId), movieIdResult);
      return movieIdResult;
    } catch (error: unknown) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Invalid data format', { cause: error });
    }
  }
}
