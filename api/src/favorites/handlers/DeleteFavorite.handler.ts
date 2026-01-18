import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { AddFavoriteCommand, DeleteFromFavoriteCommand } from '../commands';
import { FavoritesRepository } from '../repositories/Favorites.repository';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@CommandHandler(DeleteFromFavoriteCommand)
export class DeleteFavoriteHandler implements IQueryHandler<DeleteFromFavoriteCommand> {
  constructor(private readonly favoritesRepository: FavoritesRepository) {}

  async execute(command: DeleteFromFavoriteCommand) {
    const { id } = command;

    const checkExist = await this.favoritesRepository.findFirst({
      id,
    });
    if (!checkExist) {
      throw new NotFoundException('No exist item');
    }

    try {
      await this.favoritesRepository.delete({
        id,
      });

      return `Deleted 
      ${id},
      `;
    } catch (error: any) {
      // console.error(error);
      if (error instanceof BadRequestException || NotFoundException) {
        throw error;
      }
    }
  }
}
