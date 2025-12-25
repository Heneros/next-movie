import { Controller, Get, Param, Post } from '@nestjs/common';
import { FAVORITES__ROUTES, FAVORITES_CONTROLLER } from '../data';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { GetFavoritesQuery } from './queries';
import { AddFavoriteCommand } from './commands/AddToFavorites.command';

@Controller(FAVORITES_CONTROLLER)
export class FavoritesController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get(FAVORITES__ROUTES.GET_ALL_FAVORITES)
  async getFavorites(@Param('userId') userId: number) {
    const favorites = await this.queryBus.execute(
      new GetFavoritesQuery(userId),
    );
    return favorites;
  }

  @Post(FAVORITES__ROUTES.ADD_TO_LIST)
  async addFavorites(
    @Param('userId') userId: number,
    @Param('movieId') movieId: number,
  ) {
    const favorites = await this.commandBus.execute(
      new AddFavoriteCommand(userId, movieId),
    );
    return favorites;
  }
}
