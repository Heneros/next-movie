import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  AddMovieCollectionCommand,
  CreateCollectionCommand,
} from '../commands';

import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CollectionsRepository } from '../repositories/Collections.repository';

@CommandHandler(AddMovieCollectionCommand)
export class AddMovieCollectionHandler implements ICommandHandler<AddMovieCollectionCommand> {
  constructor(private readonly collectionsRepository: CollectionsRepository) {}

  async execute(command: AddMovieCollectionCommand) {
    const { collectionId, movieId } = command;
    console.log(movieId, collectionId);

    try {
      const collectionExist =
        await this.collectionsRepository.findById(collectionId);

      if (collectionExist) {
        throw new NotFoundException('Movie already added with this title. ');
      }
      const res = await this.collectionsRepository.update(
        collectionId,
        movieId,
      );

      return res;
    } catch (error) {
      if (error instanceof BadRequestException || NotFoundException) {
        throw error;
      }
    }

    //     return createCollection;
  }
}
