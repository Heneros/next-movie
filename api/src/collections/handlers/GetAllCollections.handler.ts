import {
  CommandHandler,
  ICommandHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
// import { TvShowRepository } from '../repositories/Collections.repository';
// import { GetAllTvShowQuery } from '../queries';
// import { RedisService } from '@/redis/redis.service';
// import { PAGINATION_LIMIT } from '@/data/defaultVariables';
import { BadRequestException, NotFoundException } from '@nestjs/common';
// import { CACHE_TTL } from '@/data/ttl';
import { GetAllCollectionsQuery } from '../queries';
import { CollectionsRepository } from '../repositories/Collections.repository';
import { RedisService } from '@/redis/redis.service';
import { CACHE_TTL, PAGINATION_LIMIT } from '@/data/index';

@QueryHandler(GetAllCollectionsQuery)
export class GetAllCollectionsHandler implements IQueryHandler<GetAllCollectionsQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly collectionsRepository: CollectionsRepository,
  ) {}

  async execute(query: GetAllCollectionsQuery) {
    const { offset = 0, limit = PAGINATION_LIMIT, page } = query;

    try {
      // const cacheKey = `collections:page:${page}:limit:${limit}:offset:${offset}`;

      // const collectionsCached = await this.redisService.getDataMultiple(cacheKey);

      // if (collectionsCached) {
      //   return collectionsCached;
      // }

      const { data, total } =
        await this.collectionsRepository.findAllCollections(offset, limit);

      if (data.length === 0) {
        throw new NotFoundException('No collections Exist');
      }
      const res = { data, total };
      // await this.redisService.saveItemsMultiple(
      //   cacheKey,
      //   res,
      //   CACHE_TTL.ONE_MINUTE,
      // );

      return res;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(`Database error: ${error.message}`);
      }

      throw new BadRequestException('Unknown error occurred');
    }
  }
}
