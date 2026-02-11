import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  AddMovieCollectionCommand,
  CreateCollectionCommand,
  RemoveMovieCollectionCommand,
} from '../commands';

import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { CollectionsRepository } from '../repositories/Collections.repository';
import { CollectionInterface } from '@/interfaces/model.interface';

@CommandHandler(RemoveMovieCollectionCommand)
export class RemoveMovieCollectionHandler implements ICommandHandler<RemoveMovieCollectionCommand> {
  constructor(private readonly collectionsRepository: CollectionsRepository) {}

  async execute(command: RemoveMovieCollectionCommand) {
    const { collectionId, movieId } = command;
    // console.log(movieId, collectionId);

    try {
    const collectionExist = await this.collectionsRepository.findUnique({
     where: { id: collectionId },
        include: { movies: true } 
    }) as CollectionInterface;


      if (!collectionExist) {
        throw new NotFoundException(
          `Collection with ID ${collectionId} not found`,
        );
      }

      const res = await this.collectionsRepository.removeMovieToCollection(
        collectionId,
      movieId
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
