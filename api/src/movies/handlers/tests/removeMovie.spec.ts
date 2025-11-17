import { movieDataTest } from '@/data/testsData';
import { UpdateMovieHandler } from '../UpdateMovie.handler';
import { RemoveMovieCommand, UpdateMovieCommand } from '@/movies/commands';
import { BadRequestException } from '@nestjs/common';
import { RemoveMovieHandler } from '../RemoveMovie.handler';

describe('RemoveMovieHandler', () => {
  let handler: RemoveMovieHandler;

  let movieRepository: {
    delete: jest.Mock;
    findOne: jest.Mock;
  };

  beforeEach(() => {
    movieRepository = {
      delete: jest.fn(),
      findOne: jest.fn(),
    };

    handler = new RemoveMovieHandler(movieRepository as any);
  });
  it('should delete a movie successfully', async () => {
    const movieId = 1;

    movieRepository.delete.mockResolvedValue({ id: 1 });

    // const createdMovie = { id: 'new-id', ...movieDataTest, createdBy: 1 };
    // movieRepository.update.mockReturnValue(movieDataTest);
    const result = await handler.execute(new RemoveMovieCommand(movieId));

    expect(movieRepository.delete).toHaveBeenCalledWith({ id: movieId });
    expect(movieRepository.delete).toHaveBeenCalledTimes(1);
    expect(result).toMatchObject({
      message: 'Movie was deleted',
      movieId,
    });
  });

  // it('should throw BadRequestException when update fails', async () => {
  //   const movieId = 1;
  //   const updateMovieDto = movieDataTest;
  //   const error = new Error('Database error');

  //   movieRepository.update.mockRejectedValue(error);

  //   await expect(
  //     handler.execute(new UpdateMovieCommand(movieId, updateMovieDto)),
  //   ).rejects.toThrow(BadRequestException);
  // });
  it('should throw NotFoundException if movie does not exist', async () => {
    const movieId = 999;

    movieRepository.findOne.mockResolvedValue(null);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
