import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetFavoritesQuery } from '../queries';
import { FavoritesRepository } from '../repositories/Favorites.repository';

@QueryHandler(GetFavoritesQuery)
export class GetFavoriteHandler implements IQueryHandler<GetFavoritesQuery> {
  constructor(private readonly favoriteRepository: FavoritesRepository) {}

  async execute(query: GetFavoritesQuery) {
    const { userId } = query;

    try {
      const favoriteList = await this.favoriteRepository.findUnique(userId);
      return favoriteList;
    } catch (err) {
      console.error(err);
    }
  }
}
