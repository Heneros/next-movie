import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { AddFavoriteCommand } from '../commands';
import { FavoritesRepository } from '../repositories/Favorites.repository';
import { BadRequestException } from '@nestjs/common';

@CommandHandler(AddFavoriteCommand)
export class AddFavoriteHandler implements IQueryHandler<AddFavoriteCommand> {
  constructor(private readonly favoritesRepository: FavoritesRepository) {}

  async execute(command: AddFavoriteCommand) {
    const { userId, movieId } = command;

    const checkExist = await this.favoritesRepository.findFirst({
      userId,
      movieId,
    });
    if (checkExist) {
      throw new BadRequestException('You already added to favorites');
    }

    try {
      const res = await this.favoritesRepository.create({
        userId,
        movieId,
      });

      return res;
    } catch (error: any) {
      // console.error(error);
      if (error instanceof BadRequestException) {
        throw error;
      }
    }
  }
}
