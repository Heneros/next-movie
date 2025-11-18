import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateMovieCommand } from '../commands';
import { BadRequestException, Inject } from '@nestjs/common';
import { MovieRepository } from '../repository/Movie.repository';
import { Movie } from '@prisma/client';
import { RedisService } from '@/redis/redis.service';

@CommandHandler(UpdateMovieCommand)
export class UpdateMovieHandler implements ICommandHandler<UpdateMovieCommand> {
  constructor(
    private readonly redisService: RedisService,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(command: UpdateMovieCommand): Promise<Movie> {
    const { movieId, updateMovieDto } = command;

    try {
      const movie = await this.movieRepository.update(
        { id: movieId },
        updateMovieDto,
      );
      await this.redisService.deleteMovieCache(movieId);

      return movie;
    } catch (err) {
      console.error(err);
      throw new BadRequestException('Invalid data format', err);
    }
  }
}
