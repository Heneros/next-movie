import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { COLLECTIONS_CONTROLLER, COLLECTIONS_ROUTES } from '../data';
import { Role } from '@/decorators/role.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { User } from '@/decorators/user.decorator';
import type { User as UserType } from '../interfaces';
import { GetAllCollectionsQuery } from './queries';
import { CreateCollectionDto } from './dto-input/CreateCollection.dto';
import { CheckMovieExistPipe } from '@/pipe/CheckMovieExist.pipe';
import {
  AddMovieCollectionCommand,
  CreateCollectionCommand,
  DeleteCollectionCommand,
} from './commands';

@Controller(COLLECTIONS_CONTROLLER)
@ApiTags('Collections')
export class CollectionsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get(COLLECTIONS_ROUTES.GET_ALL)
  @ApiOperation({
    summary: 'Get All Collections.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Items per page',
    type: Number,
  })
  async getAllCollections(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    page = Math.max(1, page);
    limit = Math.max(1, Math.min(limit, 100));
    const offset = (page - 1) * limit;
    const collections = await this.queryBus.execute(
      new GetAllCollectionsQuery(offset, limit, page),
    );
    return collections;
  }

  @ApiOperation({
    summary: 'Create collection.',
  })
  @Post(COLLECTIONS_ROUTES.CREATE_COLLECTION)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  async createCollection(@Body() createCollectionDto: CreateCollectionDto) {
    const res = await this.commandBus.execute(
      new CreateCollectionCommand(createCollectionDto),
    );
    return res;
  }

  @ApiOperation({
    summary: 'Add to collection movie.',
  })
  @Patch(COLLECTIONS_ROUTES.ADD_COLLECTION_COLLECTION)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  async addCollectionMovie(
    @Param('collectionId') collectionId: number,
    @Body() movieId: number,
  ) {
    const res = await this.commandBus.execute(
      new AddMovieCollectionCommand(collectionId, movieId),
    );
    return res;
  }

  @ApiOperation({
    summary: 'Delete Collection.',
  })
  @Delete(COLLECTIONS_ROUTES.DELETE_COLLECTION)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  async deleteCollection(@Param('collectionId') collectionId: number) {
    const res = await this.commandBus.execute(
      new DeleteCollectionCommand(collectionId),
    );
    return res;
  }

  // @Get(TV_SHOW_ROUTES.GET_ALL)
  // @ApiOperation({
  //   summary: 'Get All tvShow.',
  // })
  // @ApiQuery({
  //   name: 'page',
  //   required: false,
  //   description: 'Page number for pagination',
  //   type: Number,
  // })
  // @ApiQuery({
  //   name: 'limit',
  //   required: false,
  //   description: 'Items per page',
  //   type: Number,
  // })
  // @ApiQuery({
  //   name: 'category',
  //   required: false,
  //   description: 'Filter by category',
  //   type: String,
  // })
  // @ApiQuery({
  //   name: 'year',
  //   required: false,
  //   description: 'Filter by year',
  //   type: Number,
  // })
  // @ApiQuery({
  //   name: 'minRating',
  //   required: false,
  //   description: 'Filter by minimum rating',
  //   type: Number,
  // })
  // @ApiQuery({
  //   name: 'orderBy',
  //   required: false,
  //   description: 'Field to order by',
  //   type: String,
  // })
  // @ApiQuery({
  //   name: 'order',
  //   required: false,
  //   description: 'Order direction (asc/desc)',
  //   type: String,
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'TV shows list returned successfully',
  // })
  // async getAllTvShows(
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  //   @Query('limit', new DefaultValuePipe(PAGINATION_LIMIT), ParseIntPipe)
  //   limit: number,
  //   @Query('category') category?: string,
  //   @Query('year', new ParseIntPipe({ optional: true })) year?: number,
  //   @Query('minRating', new ParseIntPipe({ optional: true }))
  //   minRating?: number,
  //   @Query('orderBy') orderBy?: string,
  //   @Query('order') order?: 'asc' | 'desc',
  // ) {
  //   page = Math.max(1, page);
  //   limit = Math.max(1, Math.min(limit, 100));
  //   const offset = (page - 1) * limit;
  //   const filterTvShowDto = new FilterTvShows();
  //   //  filterTvShowDto.category = [category];
  //   filterTvShowDto.year = year;
  //   filterTvShowDto.minRating = minRating;
  //   filterTvShowDto.orderBy = orderBy;
  //   filterTvShowDto.order = order;
  //   const tvShows = await this.queryBus.execute(
  //     new GetAllTvShowQuery(offset, limit, page, filterTvShowDto),
  //   );
  //   //return new MovieEntity(movie);
  //   return tvShows;
  // }

  // @Get(TV_SHOW_ROUTES.GET_ID_TV_SHOW)
  // @ApiOperation({
  //   summary: 'Get tvShow by id',
  // })
  // @ApiParam({ name: 'tvShowId', type: Number, example: 1 })
  // @ApiResponse({ status: 200, description: 'TV show found' })
  // @ApiNotFoundResponse({ description: 'TV show not found' })
  // async getIdTvShow(@Param('tvShowId', ParseIntPipe) tvShowId: number) {
  //   const tvShow = await this.queryBus.execute(new GetIdTvShowQuery(tvShowId));

  //   return tvShow;
  // }

  // @Delete(TV_SHOW_ROUTES.DELETE_TV_SHOW)
  // @UseGuards(JwtAuthGuard)
  // @Role('ADMIN', 'EDITOR')
  // @ApiOperation({
  //   summary: 'Delete tvShow by id',
  // })
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Update TV show (ADMIN, EDITOR)' })
  // @ApiParam({ name: 'tvShowId', type: Number })
  // @ApiBody({ type: UpdateTvShowDto })
  // @ApiResponse({ status: 200, description: 'TV show updated successfully' })
  // @ApiResponse({ status: 400, description: 'Invalid data' })
  // @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  // @ApiForbiddenResponse({ description: 'Forbidden' })
  // async deleteTvShow(@Param('tvShowId', ParseIntPipe) tvShowId: number) {
  //   const tvShow = await this.commandBus.execute(
  //     new DeleteTvShowCommand(tvShowId),
  //   );

  //   return tvShow;
  // }
  // @Post(TV_SHOW_ROUTES.CREATE_TV_SHOW)
  // @UseGuards(JwtAuthGuard)
  // @Role('ADMIN', 'EDITOR')
  // @ApiOperation({
  //   summary: 'Create tvShow. available only for admin or editor role',
  // })
  // async createTvShow(
  //   @Body() createTvShowDto: CreateTvShowDto,
  //   @User() user: UserType,
  // ) {
  //   const tvShow = await this.commandBus.execute(
  //     new CreateTvShowCommand(user.id, createTvShowDto),
  //   );
  //   return tvShow;
  //   //return new MovieEntity(movie);
  // }

  // @Patch(TV_SHOW_ROUTES.UPDATE_TV_SHOW)
  // @UseGuards(JwtAuthGuard)
  // @Role('ADMIN', 'EDITOR')
  // @ApiOperation({
  //   summary: 'Update tvShow. available only for admin or editor role',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: `TvShow updated successfully!`,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: `Invalid data!`,
  // })
  // async updateTvShow(
  //   @Param('tvShowId', ParseIntPipe) tvShowId: number,
  //   @Body() updateTvShowDto: UpdateTvShowDto,
  // ) {
  //   const tvShow = await this.commandBus.execute(
  //     new UpdateTvShowCommand(tvShowId, updateTvShowDto),
  //   );
  //   return tvShow;
  //   //return new MovieEntity(movie);
  // }
}
