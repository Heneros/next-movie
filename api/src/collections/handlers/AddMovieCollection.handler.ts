import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddMovieCollectionCommand, CreateCollectionCommand } from '../commands';

import { BadRequestException } from '@nestjs/common';
import { CollectionsRepository } from '../repositories/Collections.repository';

@CommandHandler(AddMovieCollectionCommand)
export class AddMovieCollectionHandler implements ICommandHandler<AddMovieCollectionCommand> {
  constructor(private readonly collectionsRepository: CollectionsRepository) {}

  async execute(command: AddMovieCollectionCommand) {
//     const { createCollectionDto } = command;

//     const collectionExist = await this.collectionsRepository.findUnique({
//       slug: createCollectionDto.slug,
//     });

//     if (collectionExist) {
//       throw new BadRequestException(
//         'Movie already added with this title. ',
//       );
//     }

//     const createCollection =
//       await this.collectionsRepository.create(createCollectionDto);

//     return createCollection;
  }
}
