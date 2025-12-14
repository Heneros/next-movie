import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveMovieCommand } from '../commands';
import { MovieRepository } from '../repository/Movie.repository';

@CommandHandler(RemoveMovieCommand)
export class RemoveMovieHandler implements ICommandHandler<RemoveMovieCommand> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(command: RemoveMovieCommand) {
    const { movieId } = command;

    await this.movieRepository.delete({ id: movieId });

    return { message: `Movie was deleted`, movieId };
  }
}
