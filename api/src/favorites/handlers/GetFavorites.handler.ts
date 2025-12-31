import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetFavoritesQuery } from '../queries';
import { FavoritesRepository } from '../repositories/Favorites.repository';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@QueryHandler(GetFavoritesQuery)
export class GetFavoriteHandler implements IQueryHandler<GetFavoritesQuery> {
  constructor(private readonly favoriteRepository: FavoritesRepository) {}

  async execute(query: GetFavoritesQuery) {
    const { userId } = query;

    try {
      const favoriteList = await this.favoriteRepository.findFirst({ userId });

      if (!favoriteList) {
        throw new NotFoundException('No favorite list');
      }
      return favoriteList;
    } catch (err) {
      // console.error(err);

      if (err instanceof BadRequestException || NotFoundException) {
        throw err;
      }
    }
  }
}
