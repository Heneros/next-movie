import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCollectionCommand } from '../commands';
import { RedisService } from '@/redis/redis.service';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { CollectionsRepository } from '../repositories/Collections.repository';
import { CollectionInterface } from '@/interfaces/model.interface';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(DeleteCollectionCommand)
export class DeleteCollectionHandler implements ICommandHandler<DeleteCollectionCommand> {
  constructor(
    private readonly collectionRepository: CollectionsRepository,
    private readonly redisService: RedisService,
  ) {}

  async execute(command: DeleteCollectionCommand) {
    const { collectionId } = command;


    const collectionExist = await this.collectionRepository.findUnique(
     { id: collectionId },
    ) as CollectionInterface;


      if (!collectionExist) {
        throw new NotFoundException(
          `Collection with ID ${collectionId} not found`,
        );
      }
    await this.collectionRepository.delete({ id: collectionId });
    await this.redisService.deleteItemCache(
      RedisPrefixEnum.COLLECTIONS_ID,
      collectionId,
    );
    return { message: `Collection was deleted`, collectionId };
  }
}
