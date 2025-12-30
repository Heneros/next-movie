import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FAVORITES__ROUTES, FAVORITES_CONTROLLER } from '../data';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { GetFavoritesQuery } from './queries';
import { AddFavoriteCommand } from './commands/AddToFavorites.command';
import { CheckUserExistPipe } from '@/pipe/CheckUserExistPipe.pipe';
import { CheckMovieExistPipe } from '@/pipe/CheckMovieExist.pipe';
import { ProfileOwnerGuard } from '@/guards/profile-owner.guard';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { RemoveFromFavoriteCommand } from './commands';

@Controller(FAVORITES_CONTROLLER)
export class FavoritesController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get(FAVORITES__ROUTES.GET_ALL_FAVORITES)
  @UseGuards(JwtAuthGuard, ProfileOwnerGuard)
  async getFavorites(@Param('userId') userId: number) {
    const favorites = await this.queryBus.execute(
      new GetFavoritesQuery(userId),
    );
    return favorites;
  }

  @Post(FAVORITES__ROUTES.ADD_TO_LIST)
  @UseGuards(JwtAuthGuard, ProfileOwnerGuard)
  async addFavorites(
    @Param('userId', CheckUserExistPipe, ParseIntPipe) userId: number,
    @Param('movieId', CheckMovieExistPipe, ParseIntPipe) movieId: number,
  ) {
    const favorites = await this.commandBus.execute(
      new AddFavoriteCommand(userId, movieId),
    );
    return favorites;
  }

  @Delete(FAVORITES__ROUTES.REMOVE_FAVORITE)
  @UseGuards(JwtAuthGuard, ProfileOwnerGuard)
  async removeFromFavorite(
    @Param('userId', CheckUserExistPipe, ParseIntPipe) userId: number,
    @Param('movieId', CheckMovieExistPipe, ParseIntPipe) movieId: number,
  ) {
    const favorites = await this.commandBus.execute(
      new RemoveFromFavoriteCommand(userId, movieId),
    );
    return favorites;
  }
}
