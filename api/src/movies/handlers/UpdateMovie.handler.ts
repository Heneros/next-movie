import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateMovieCommand } from '../commands';
import { BadRequestException, Inject } from '@nestjs/common';
import { MovieRepository } from '../repository/Movie.repository';
import { Movie } from '@prisma/client';

@CommandHandler(UpdateMovieCommand)
export class UpdateMovieHandler implements ICommandHandler<UpdateMovieCommand> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(command: UpdateMovieCommand): Promise<Movie> {
    const { movieId: id, updateMovieDto } = command;

    try {
      const movie = await this.movieRepository.update(
        { id },

        updateMovieDto,
      );
      return movie;
    } catch (err) {
      console.log(err);
      throw new BadRequestException('Invalid data format', err);
    }
  }
}
