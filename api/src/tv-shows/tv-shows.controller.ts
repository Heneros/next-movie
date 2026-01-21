import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MOVIE_CONTROLLER, PAGINATION_LIMIT, TV_SHOW_CONTROLLER, TV_SHOW_ROUTES } from '../data';
import { Role } from '@/decorators/role.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CreateTvShowDto } from './dto-input/CreateTvShow.dto';
import { User } from '@/decorators/user.decorator';
import { CreateTvShowCommand, DeleteTvShowCommand, UpdateTvShowCommand } from './commands';
import type { User as UserType } from '../interfaces';
import { GetAllTvShowQuery, GetIdTvShowQuery } from './queries';
import { FilterTvShows } from './dto-input/Filter-tvShows.dto';
import { UpdateTvShowDto } from './dto-input/UpdateTvShow.dto';

@Controller(TV_SHOW_CONTROLLER)
@ApiTags('TvShow')
export class TvShowController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get(TV_SHOW_ROUTES.GET_ALL)
  @ApiOperation({
    summary: 'Create tvShow. available only for admin or editor role',
  })
  async getAllTvShows(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(PAGINATION_LIMIT), ParseIntPipe)
    limit: number,
    @Query('category') category?: string,
    @Query('year', new ParseIntPipe({ optional: true })) year?: number,
    @Query('minRating', new ParseIntPipe({ optional: true }))
    minRating?: number,
    @Query('orderBy') orderBy?: string,
    @Query('order') order?: 'asc' | 'desc',
  ) {
     page = Math.max(1, page)
     limit = Math.max(1, Math.min(limit, 100))
     const offset = (page - 1) * limit;
     const filterTvShowDto = new FilterTvShows();
    //  filterTvShowDto.category = [category];
    filterTvShowDto.year = year;
    filterTvShowDto.minRating = minRating;
    filterTvShowDto.orderBy = orderBy;
    filterTvShowDto.order = order;
     const tvShows = await this.queryBus.execute(new GetAllTvShowQuery(offset, limit, page, filterTvShowDto))
    //return new MovieEntity(movie);
       return tvShows;
  }

  @Get(TV_SHOW_ROUTES.GET_ID_TV_SHOW)
  async getIdTvShow(@Param("tvShowId", ParseIntPipe) tvShowId: number){

    const tvShow = await this.queryBus.execute(new GetIdTvShowQuery(tvShowId))

    return tvShow
  }

  @Delete(TV_SHOW_ROUTES.DELETE_TV_SHOW)
  async deleteTvShow(@Param("tvShowId", ParseIntPipe) tvShowId: number){

    const tvShow = await this.commandBus.execute(new DeleteTvShowCommand(tvShowId))

    return tvShow
  }
  @Post(TV_SHOW_ROUTES.CREATE_TV_SHOW)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  @ApiOperation({
    summary: 'Create tvShow. available only for admin or editor role',
  })
  async createTvShow(
    @Body() createTvShowDto: CreateTvShowDto,
    @User() user: UserType,
  ) {
    const tvShow = await this.commandBus.execute(
      new CreateTvShowCommand(user.id, createTvShowDto),
    );
    return tvShow;
    //return new MovieEntity(movie);
  }
  @Patch(TV_SHOW_ROUTES.UPDATE_TV_SHOW)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  @ApiOperation({
    summary: 'Update tvShow. available only for admin or editor role',
  })
    @ApiResponse({
      status: 200,
      description: `TvShow updated successfully!`,
    })
    @ApiResponse({
      status: 400,
      description: `Invalid data!`,
    })
  async  updateTvShow(
        @Param('tvShowId', ParseIntPipe) tvShowId: number,
    @Body() updateTvShowDto: UpdateTvShowDto,
  ) {
    const tvShow = await this.commandBus.execute(
      new UpdateTvShowCommand(tvShowId, updateTvShowDto),
    );
    return tvShow;
    //return new MovieEntity(movie);
  }


}
