import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTvShowCommand } from '../commands';
import { TvShowRepository } from '../repositories/Collections.repository';
import { RedisService } from '@/redis/redis.service';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';

@CommandHandler(DeleteTvShowCommand)
export class DeleteTvShowHandler implements ICommandHandler<DeleteTvShowCommand> {
  constructor(
    private readonly tvShowRepository: TvShowRepository,
    private readonly redisService: RedisService,
  ) {}

  async execute(command: DeleteTvShowCommand) {
    const { tvShowId } = command;

    await this.tvShowRepository.delete({ id: tvShowId });
    await this.redisService.deleteItemCache(
      RedisPrefixEnum.TV_SHOW_ID,
      tvShowId,
    );
    return { message: `TvShow was deleted`, tvShowId };
  }
}
