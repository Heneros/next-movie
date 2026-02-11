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
import type { User as UserType } from '../interfaces';
import { GetAllCollectionsQuery, GetIdCollectionQuery } from './queries';
import { CreateCollectionDto } from './dto-input/CreateCollection.dto';
import { CheckMovieExistPipe } from '@/pipe/CheckMovieExist.pipe';
import {
  AddMovieCollectionCommand,
  CreateCollectionCommand,
  DeleteCollectionCommand,
  RemoveMovieCollectionCommand,
} from './commands';
import { AddMovieToCollectionDto } from './dto-input/MovieId.dto';

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



  @Get(COLLECTIONS_ROUTES.GET_ID_COLLECTION)
  @ApiOperation({
    summary: 'Get All Collections.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Items per page',
    type: Number,
  })
  async getIdCollection(
    @Param('collectionId',  ParseIntPipe) collectionId: number,
  ) {
    const res = await this.queryBus.execute(new GetIdCollectionQuery(collectionId))
return res
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
  @Patch(COLLECTIONS_ROUTES.ADD_MOVIE_COLLECTION)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  async addCollectionMovie(
    @Param('collectionId') collectionId: number,
  @Body() dto: AddMovieToCollectionDto
  ) {
    const res = await this.commandBus.execute(
      new AddMovieCollectionCommand(collectionId, dto.movieId),
    );
    return res;
  }

  @ApiOperation({
    summary: 'Remove from collection movie.',
  })
  @Delete(COLLECTIONS_ROUTES.REMOVE_MOVIE_COLLECTION)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  async removeMovieFromCollection(
    @Param('collectionId') collectionId: number,
  @Body() dto: AddMovieToCollectionDto
  ) {
    const res = await this.commandBus.execute(
      new RemoveMovieCollectionCommand(collectionId, dto.movieId),
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
}
