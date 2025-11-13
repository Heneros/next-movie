import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../commands/createMovie.command';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { MovieRepository } from '../repository/Movie.repository';
import { RedisPrefixEnum } from '@/data';
import { RedisService } from '@/redis/redis.service';

@CommandHandler(CreateMovieCommand)
export class CreateMovieHandler implements ICommandHandler<CreateMovieCommand> {
  constructor(
    private readonly redisService: RedisService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(command: CreateMovieCommand) {
    const { userId, createMovieDto } = command;

    const movieExist = await this.movieRepository.findByTitleOrSlug(
      createMovieDto.title,
      createMovieDto.slug,
    );

    if (movieExist) {
      throw new BadRequestException(
        'Movie already exists with this title and slug. ',
      );
    }

    const movie = await this.movieRepository.createMovie(
      userId,
      createMovieDto,
    );

    await this.redisService.deleteMoviesCache();

    return movie;
  }
}
