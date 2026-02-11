import {
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { RedisService } from '@/redis/redis.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CollectionsRepository } from '../repositories/Collections.repository';
import { GetIdCollectionQuery } from '../queries';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';

@QueryHandler(GetIdCollectionQuery)
export class GetIdCollectionHandler implements IQueryHandler<GetIdCollectionQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly collectionsRepository: CollectionsRepository,
  ) {}

  async execute(query: GetIdCollectionQuery) {
    const { collectionId } = query;

    try {
      const collectionKey = `${RedisPrefixEnum.COLLECTIONS_ID}:${collectionId}`;
      const collectionCached = await this.redisService.getId(collectionKey);
      // if (collectionCached) {
      //   return JSON.parse(collectionCached);
      // }

      const collectionIdResult = await this.collectionsRepository.findById(

    collectionId 
     
      );

      if (!collectionIdResult) {
        throw new NotFoundException(
          `Collection don\'t exist', ${collectionIdResult}`,
        );
      }

      await this.redisService.saveDataItem(
        String(collectionId),
        collectionIdResult,
      );
      return collectionIdResult;
    } catch (error) {
      console.error(error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Invalid data format', { cause: error });
    }
  }
}
