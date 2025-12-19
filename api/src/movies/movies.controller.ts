import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseIntPipe,
  NotFoundException,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
  DefaultValuePipe,
  UploadedFiles,
  ValidationPipe,
} from '@nestjs/common';
import {
  AI_ROUTES,
  MOVIE_CONTROLLER,
  MOVIE_ROUTES,
  PAGINATION_LIMIT,
} from '../data';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MovieEntity } from './entities/movie.entity';
import { FindAllMovieQuery, GetIdMovieQuery } from './queries';

import {
  CreateMovieCommand,
  RemoveMovieCommand,
  UpdateMovieCommand,
} from './commands';
import { CreateMovieDto } from './dto-input/create-movie.dto';
import { User } from '@/decorators/user.decorator';
import type { User as UseType } from '../interfaces';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';
import { Role } from '@/decorators/role.decorator';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

import { Throttle } from '@nestjs/throttler';
import { ChatRequestDto } from './dto-input/chat-request.dto';
import { UpdateMovieDto } from './dto-input/update-movie.dto';

import { CheckMovieExistPipe } from '@/pipe/CheckMovieExist.pipe';
import { AiAgentService } from '@/ai-agent/ai-agent.service';
import { FilterMovieDto } from './dto-input/filter-movie.dto';

@Controller(MOVIE_CONTROLLER)
@ApiTags('Movie')
export class MoviesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly cloudinaryService: CloudinaryService,
    private readonly aiagentService: AiAgentService,
  ) {}

  @Get(MOVIE_ROUTES.GET_ALL)
  @ApiOperation({ summary: 'Get All Movies' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiQuery({
  name: 'limit',
  required: false,
  description: 'Items per page',
  type: Number,
})
@ApiQuery({
  name: 'category',
  required: false,
  description: 'Filter by category',
  type: String,
})
@ApiQuery({
  name: 'year',
  required: false,
  description: 'Filter by year',
  type: Number,
})
@ApiQuery({
  name: 'minRating',
  required: false,
  description: 'Filter by minimum rating',
  type: Number,
})
@ApiQuery({
  name: 'orderBy',
  required: false,
  description: 'Field to order by',
  type: String,
})
@ApiQuery({
  name: 'order',
  required: false,
  description: 'Order direction (asc/desc)',
  type: String,
})
  @ApiOkResponse({ type: MovieEntity, isArray: true })
  async getAllMovies(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Query('limit', new DefaultValuePipe(PAGINATION_LIMIT), ParseIntPipe) limit: number,
  @Query('category') category?: string,
  @Query('year', new ParseIntPipe({ optional: true })) year?: number,
  @Query('minRating', new ParseIntPipe({ optional: true })) minRating?: number,
  @Query('orderBy') orderBy?: string,
  @Query('order') order?: 'asc' | 'desc',
  ) {
    page = Math.max(1, page);
    limit = Math.max(1, Math.min(limit, 100));
    const offset = (page - 1) * limit;
    console.log(4441);
      const filterMovieDto = new FilterMovieDto();
      filterMovieDto.category = category;
      filterMovieDto.year = year;
      filterMovieDto.minRating = minRating;
      filterMovieDto.orderBy = orderBy;
      filterMovieDto.order = order;
    const movies = await this.queryBus.execute(
      new FindAllMovieQuery(offset, limit, page, filterMovieDto),
    );
    return movies;

    //  return movies.map((movie: Movie) => new MovieEntity(movie));
  }

  @Get(MOVIE_ROUTES.GET_ID_MOVIE)
  @ApiOperation({
    summary: 'Get movie by id.',
  })
  @ApiResponse({
    status: 200,
    description: `Movie get successfully!`,
  })
  @ApiOkResponse({ type: MovieEntity })
  async getIdMovie(
    @Param('movieId', ParseIntPipe, CheckMovieExistPipe) movieId: number,
  ) {
    const movie = await this.queryBus.execute(new GetIdMovieQuery(movieId));
    return plainToInstance(MovieEntity, movie);
  }

  @Delete(MOVIE_ROUTES.DELETE_MOVIE)
  @ApiOperation({
    summary: 'Delete movie by id.',
  })
  @ApiResponse({
    status: 200,
    description: `Delete get successfully!`,
  })
  @ApiOkResponse({ type: MovieEntity })
  async removeMovie(
    @Param('movieId', ParseIntPipe, CheckMovieExistPipe) movieId: number,
  ) {
    const movie = await this.commandBus.execute(
      new RemoveMovieCommand(movieId),
    );
    return movie;
    // return plainToInstance(MovieEntity, movie);
  }

  @Patch(MOVIE_ROUTES.UPDATE_MOVIE)
    @Post(MOVIE_ROUTES.CREATE_MOVIE)
  @UseGuards(JwtAuthGuard)
  @Role("ADMIN", "EDITOR")
  @ApiOperation({
    summary: 'Update movie by id.',
  })
  @ApiResponse({
    status: 200,
    description: `Movie updated successfully!`,
  })
  @ApiResponse({
    status: 400,
    description: `Invalid data!`,
  })
  @ApiOkResponse({ type: MovieEntity })
  async updateMovie(
    @Param('movieId', ParseIntPipe, CheckMovieExistPipe) movieId: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    const movie = await this.commandBus.execute(
      new UpdateMovieCommand(movieId, updateMovieDto),
    );
    return movie;

    // return plainToInstance(MovieEntity, movie);
  }

  @Post(MOVIE_ROUTES.CREATE_MOVIE)
  @UseGuards(JwtAuthGuard)
  @Role("ADMIN", "EDITOR")
  @ApiOperation({
    summary: 'Create movie. available only for admin or editor role',
  })
  @ApiBearerAuth('access-token')
  async createMovie(
    @Body() createMovieDto: CreateMovieDto,
    @User() user: UseType,
  ) {
    const movie = await this.commandBus.execute(
      new CreateMovieCommand(user.id, createMovieDto),
    );
    return new MovieEntity(movie);
  }

  @ApiOperation({ summary: 'Get preview image movie' })
  @Get(MOVIE_ROUTES.IMAGE_PREVIEW)
  async getPreviewImg(@Param('movieId', ParseIntPipe) movieId: number) {
    try {
      const res = this.cloudinaryService.getImagePreview(movieId);

      if (!res) {
        throw new NotFoundException('Not found image preview');
      }
      return res;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      console.log('FILE:', error);
    }
  }

  @Post(MOVIE_ROUTES.IMAGE_PREVIEW)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  @ApiOperation({ summary: 'Upload a preview image for a movie' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiParam({ name: 'id', type: Number, description: 'Movie ID' })
  @ApiResponse({
    status: 201,
    description: 'Preview image uploaded successfully',
  })
  @ApiBearerAuth('access-token')
  @ApiResponse({
    status: 400,
    description: 'Bad Request or no file uploaded',
  })
  async uploadImage(
    @Param('movieId', ParseIntPipe, CheckMovieExistPipe) movieId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      if (!file) {
        throw new BadRequestException(
          `Error during upload file ${file} and ${movieId}`,
        );
      }

      const res = await this.cloudinaryService.uploadPreview(movieId, file);
      // console.log('res', res);
      return res;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.log('FILE:', error);
    }
  }

  @ApiOperation({ summary: 'Delete preview image movie' })
  @Delete(MOVIE_ROUTES.IMAGE_PREVIEW)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN', 'EDITOR')
  async deletePreviewImg(@Param('id', ParseIntPipe) previewId: number) {
    try {
      const res = this.cloudinaryService.deleteImagePreview(previewId);

      if (!res) {
        throw new NotFoundException('Not found image preview');
      }
      return res;
    } catch (error) {
      console.log('FILE:', error);
      if (error instanceof NotFoundException) {
        throw error;
      }
    }
  }

  @Throttle({ default: { limit: 15, ttl: 60000 } })
  @Post(AI_ROUTES.SEND_MESSAGE)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Send chat messages to the AI agent and get assistant reply',
  })
  @ApiBody({ type: ChatRequestDto })
  @ApiResponse({
    status: 200,
    description: 'Assistant reply',
    type: ChatRequestDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async chat(
    @Body()
    body: ChatRequestDto,
  ) {
    const { messages, model } = body;
    const text = await this.aiagentService.chat(messages, model);
    return text;
  }

  @Post(MOVIE_ROUTES.UPLOAD_IMAGES)
  @ApiOperation({ summary: 'Gallery upload multiple images' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(
    FilesInterceptor('qwerty', 5, {
      storage: memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  @Role('ADMIN', 'EDITOR')
  @UseGuards(JwtAuthGuard)
  async uploadGallery(
    @Param('movieId', CheckMovieExistPipe, ParseIntPipe) movieId: number,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log(files);
    try {
      if (!files) {
        return 'Error during upload files';
      }
      return await this.cloudinaryService.uploadGalleryImages(movieId, files);
    } catch (err) {
      console.error('FILES:', err);
      throw new Error('', err);
    }
  }
}
