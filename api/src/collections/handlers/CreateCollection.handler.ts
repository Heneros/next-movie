 import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCollectionCommand } from '../commands';

import { BadRequestException } from '@nestjs/common';
import { CollectionsRepository } from '../repositories/Collections.repository';

@CommandHandler(CreateCollectionCommand)
export class CreateCollectionHandler implements ICommandHandler<CreateCollectionCommand> {
  constructor(private readonly collectionsRepository: CollectionsRepository) {}

  async execute(command: CreateCollectionCommand) {
//     const { userId, createTvShowDto } = command;

//     const tvShowExist = await this.tvShowRepository.findByTitleOrSlug(
//       createTvShowDto.title,
//       createTvShowDto.slug,
//     );
//     if (tvShowExist) {
//       throw new BadRequestException(
//         'TvShow already exists with this title and slug. ',
//       );
//     }
//     const createTv = await this.tvShowRepository.createTvShow(
//       userId,
//       createTvShowDto,
//     );

//     return createTv;
  }
}
