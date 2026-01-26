import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { BadRequestException, Inject } from '@nestjs/common';

import { RedisService } from '@/redis/redis.service';
import { UpdateTvShowCommand } from '../commands';
import { TvShowRepository } from '../repositories/Collections.repository';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';

@CommandHandler(UpdateTvShowCommand)
export class UpdateTvShowHandler implements ICommandHandler<UpdateTvShowCommand> {
  constructor(
    private readonly redisService: RedisService,
    private readonly tvShowRepository: TvShowRepository,
  ) {}

  async execute(command: UpdateTvShowCommand) {
    const { tvShowId, updateTvShowDto } = command;

    try {
      const tvShow = await this.tvShowRepository.update(
        { id: tvShowId },
        updateTvShowDto,
      );
      await this.redisService.deleteItemCache(
        RedisPrefixEnum.TV_SHOW_ID,
        tvShowId,
      );

      return tvShow;
    } catch (err) {
      console.error(err);
      throw new BadRequestException('Invalid data format', err);
    }
  }
}
