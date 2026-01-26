import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTvShowCommand } from '../commands';
import { TvShowRepository } from '../repositories/Collections.repository';
import { CreateTvShowDto } from '../dto-input/CreateTvShow.dto';
import { BadRequestException } from '@nestjs/common';

@CommandHandler(CreateTvShowCommand)
export class CreateTvShowHandler implements ICommandHandler<CreateTvShowCommand> {
  constructor(private readonly tvShowRepository: TvShowRepository) {}

  async execute(command: CreateTvShowCommand) {
    const { userId, createTvShowDto } = command;

    const tvShowExist = await this.tvShowRepository.findByTitleOrSlug(
      createTvShowDto.title,
      createTvShowDto.slug,
    );
    if (tvShowExist) {
      throw new BadRequestException(
        'TvShow already exists with this title and slug. ',
      );
    }
    const createTv = await this.tvShowRepository.createTvShow(
      userId,
      createTvShowDto,
    );

    return createTv;
  }
}
