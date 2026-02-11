import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { BadRequestException, Inject } from '@nestjs/common';

import { RedisService } from '@/redis/redis.service';
import { UpdateCollectionCommand } from '../commands';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { CollectionsRepository } from '../repositories/Collections.repository';

@CommandHandler(UpdateCollectionCommand)
export class UpdateCollectionHandler implements ICommandHandler<UpdateCollectionCommand> {
  constructor(
    private readonly redisService: RedisService,
    private readonly collectionRepository: CollectionsRepository,
  ) {}

  async execute(command: UpdateCollectionCommand) {
    const { collectionId, collectionUpdateDto } = command;

    try {
      const collection = await this.collectionRepository.update(
        { id: collectionId },
        collectionUpdateDto,
      );
      await this.redisService.deleteItemCache(
        RedisPrefixEnum.COLLECTIONS_ID,
        collectionId,
      );

      return collection;
    } catch (err) {
      console.error(err);
      throw new BadRequestException('Invalid data format', err);
    }
  }
}
