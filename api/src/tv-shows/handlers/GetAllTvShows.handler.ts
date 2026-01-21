import {
  CommandHandler,
  ICommandHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { TvShowRepository } from '../repositories/TvShow.repository';
import { GetAllTvShowQuery } from '../queries';
import { RedisService } from '@/redis/redis.service';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CACHE_TTL } from '@/data/ttl';

@QueryHandler(GetAllTvShowQuery)
export class GetAllTvShowHandler implements IQueryHandler<GetAllTvShowQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly tvShowRepository: TvShowRepository,
  ) {}

  async execute(query: GetAllTvShowQuery) {
    const { offset = 0, limit = PAGINATION_LIMIT, page = 1, filters } = query;

    try {
      const cacheKey = `tvShow:page:${page}:limit:${limit}:offset:${offset}:filters:${JSON.stringify(filters)}`;

      const tvShowCached = await this.redisService.getDataMultiple(cacheKey);

      if (tvShowCached) {
        return tvShowCached;
      }

      const [data, total] = await this.tvShowRepository.findAllTvShows(
        offset,
        limit,
        filters,
      );

      if (data.length === 0) {
        throw new NotFoundException('No tvShopws Exist');
      }
      const res = { data, total };
      await this.redisService.saveItemsMultiple(
        cacheKey,
        res,
        CACHE_TTL.ONE_MINUTE,
      );

      return res;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(`Database error: ${error.message}`);
      }

      throw new BadRequestException('Unknown error occurred');
    }
  }
}
