import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCollectionCommand } from '../commands';

import { BadRequestException } from '@nestjs/common';
import { CollectionsRepository } from '../repositories/Collections.repository';

@CommandHandler(CreateCollectionCommand)
export class CreateCollectionHandler implements ICommandHandler<CreateCollectionCommand> {
  constructor(private readonly collectionsRepository: CollectionsRepository) {}

  async execute(command: CreateCollectionCommand) {
    const { createCollectionDto } = command;

    const collectionExist = await this.collectionsRepository.findUnique({
      slug: createCollectionDto.slug,
    });

    if (collectionExist) {
      throw new BadRequestException(
        'Collection already exists with this title. ',
      );
    }

    const createCollection =
      await this.collectionsRepository.create(createCollectionDto);

    return createCollection;
  }
}
