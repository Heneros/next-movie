import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { Body, Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MOVIE_CONTROLLER, PAGINATION_LIMIT, TV_SHOW_CONTROLLER, TV_SHOW_ROUTES } from '../data';
import { Role } from '@/decorators/role.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CreateTvShowDto } from './dto-input/CreateTvShow.dto';
import { User } from '@/decorators/user.decorator';
import { CreateTvShowCommand } from './commands';
import type { User as UserType } from '../interfaces';
import { GetAllTvShowQuery } from './queries';
import { FilterTvShows } from './dto-input/Filter-tvShows.dto';

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
}
