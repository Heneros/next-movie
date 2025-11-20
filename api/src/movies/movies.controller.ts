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
import { Movie } from '@prisma/client';
import {
  CreateMovieCommand,
  RemoveMovieCommand,
  UpdateMovieCommand,
} from './commands';
import { CreateMovieDto } from './dto-input/create-movie.dto';
import { User } from '@/decorators/user.decorator';
import type { User as UseType } from '../interfaces';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CheckMovieExistPipe } from 'src/pipe/CheckMovieExist.pipe';
import { plainToInstance } from 'class-transformer';
import { Role } from '@/decorators/role.decorator';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { AgentService } from './agent.service';
import { Throttle } from '@nestjs/throttler';
import { ChatRequestDto } from './dto-input/chat-request.dto';
import { UpdateMovieDto } from './dto-input/update-movie.dto';

@Controller(MOVIE_CONTROLLER)
@ApiTags('Movie')
export class MoviesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly cloudinaryService: CloudinaryService,
    private readonly agentService: AgentService,
  ) {}

  @Get(MOVIE_ROUTES.GET_ALL)
  @ApiOperation({ summary: 'Get All Movies' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiOkResponse({ type: MovieEntity, isArray: true })
  async getAllMovies(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(PAGINATION_LIMIT), ParseIntPipe)
    limit: number,
  ) {
    page = Math.max(1, page);
    limit = Math.max(1, Math.min(limit, 100));
    const offset = (page - 1) * limit;
    const movies = await this.queryBus.execute(
      new FindAllMovieQuery(offset, limit, page),
    );
  return movies;
    // console.log(movies);
    // return movies.map((movie: Movie) => new MovieEntity(movie));
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

  // @Post(MOVIE_ROUTES.UPLOAD_IMAGES)
  // @ApiOperation({ summary: 'Gallery upload multiple images' })
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       files: {
  //         type: 'array',
  //         items: {
  //           type: 'string',
  //           format: 'binary',
  //         },
  //       },
  //     },
  //   },
  // })
  // @UseInterceptors(
  //   FilesInterceptor('files', 5, {
  //     storage: memoryStorage(),
  //     limits: { fileSize: 5 * 1024 * 1024 },
  //   }),
  // )
  // @UseGuards(AuthGuard)
  // @Roles('Admin', 'Editor')
  // uploadGallery(
  //   @Param('id', ParseIntPipe) movieId: number,
  //   @UploadedFiles() files: Express.Multer.File[],
  // ) {
  //   try {
  //     if (!files) {
  //       return 'Error during upload files';
  //     }
  //     return this.cloudinaryService.uploadGalleryImages(movieId, files);
  //   } catch (error) {
  //     console.log('FILES:', error);
  //   }
  // }

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
  @Role('Admin', 'Editor')
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
  @Role('Admin', 'Editor')
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
    const text = await this.agentService.chat(messages, model);
    return text;
  }
}
