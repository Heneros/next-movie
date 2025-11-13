import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateMovieCommand } from '../commands';
import { BadRequestException, Inject } from '@nestjs/common';
import { MovieRepository } from '../repository/Movie.repository';
import { Movie } from '@prisma/client';

@CommandHandler(UpdateMovieCommand)
export class UpdateMovieHandler implements ICommandHandler<UpdateMovieCommand> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(command: UpdateMovieCommand): Promise<Movie> {
    const { movieId, updateMovieDto } = command;

    try {
      const movie = await this.movieRepository.update(movieId, updateMovieDto);
      return movie;
    } catch (error) {
      throw new BadRequestException('Invalid data format');
    }
  }
}
