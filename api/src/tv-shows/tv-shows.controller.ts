import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MOVIE_CONTROLLER, TV_SHOW_CONTROLLER, TV_SHOW_ROUTES } from '../data';
import { Role } from '@/decorators/role.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CreateTvShowDto } from './dto-input/CreateTvShow.dto';
import { User } from '@/decorators/user.decorator';
import { CreateTvShowCommand } from './commands';
import  type { User as UserType } from '../interfaces';

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
          @Body() createTvShowDto: CreateTvShowDto,
          @User() user: UserType
        ) {
    const tvShow = await this.commandBus.execute(
      new CreateTvShowCommand(user.id, createTvShowDto),
    );
    return tvShow
    //return new MovieEntity(movie);
        }


  @Post(TV_SHOW_ROUTES.CREATE_TV_SHOW)
    @UseGuards(JwtAuthGuard)
    @Role('ADMIN', 'EDITOR')
      @ApiOperation({
        summary: 'Create tvShow. available only for admin or editor role',
      })
        async createTvShow(
          @Body() createTvShowDto: CreateTvShowDto,
          @User() user: UserType
        ) {
    const tvShow = await this.commandBus.execute(
      new CreateTvShowCommand(user.id, createTvShowDto),
    );
    return tvShow
    //return new MovieEntity(movie);
        }
}
