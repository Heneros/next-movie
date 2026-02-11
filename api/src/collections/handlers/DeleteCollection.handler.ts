import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCollectionCommand } from '../commands';
import { RedisService } from '@/redis/redis.service';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { CollectionsRepository } from '../repositories/Collections.repository';

@CommandHandler(DeleteCollectionCommand)
export class DeleteCollectionHandler implements ICommandHandler<DeleteCollectionCommand> {
  constructor(
    private readonly collectionRepository: CollectionsRepository,
    private readonly redisService: RedisService,
  ) {}

  async execute(command: DeleteCollectionCommand) {
    const { collectionId } = command;

    await this.collectionRepository.delete({ id: collectionId });
    await this.redisService.deleteItemCache(
      RedisPrefixEnum.COLLECTIONS_ID,
      collectionId,
    );
    return { message: `Collection was deleted`, collectionId };
  }
}
