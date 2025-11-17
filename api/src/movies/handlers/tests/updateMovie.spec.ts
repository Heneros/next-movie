import { movieDataTest } from '@/data/testsData';
import { UpdateMovieHandler } from '../UpdateMovie.handler';
import { UpdateMovieCommand } from '@/movies/commands';
import { BadRequestException } from '@nestjs/common';

describe('UpdateMovieHandler', () => {
  let handler: UpdateMovieHandler;

  let movieRepository: {
    update: jest.Mock;
  };

  beforeEach(() => {
    movieRepository = {
      update: jest.fn(),
    };

    handler = new UpdateMovieHandler(movieRepository as any);
  });
  it('should update a movie successfully', async () => {
    // const createdMovie = { id: 'new-id', ...movieDataTest, createdBy: 1 };

    ///movieRepository.update.mockResolvedValue(null);
    const movieId = 1;
    const expectedMovie = { id: 1, ...movieDataTest, createdBy: 1 };

    movieRepository.update.mockResolvedValue(expectedMovie);

    // const createdMovie = { id: 'new-id', ...movieDataTest, createdBy: 1 };
    // movieRepository.update.mockReturnValue(movieDataTest);
    const result = await handler.execute(
      new UpdateMovieCommand(movieId, movieDataTest),
    );

    expect(movieRepository.update).toHaveBeenCalledWith(
      { id: movieId },
      movieDataTest,
    );

    expect(result).toEqual(expectedMovie);
  });

  it('should throw BadRequestException when update fails', async () => {
    const movieId = 1;
    const updateMovieDto = movieDataTest;
    const error = new Error('Database error');

    movieRepository.update.mockRejectedValue(error);

    await expect(
      handler.execute(new UpdateMovieCommand(movieId, updateMovieDto)),
    ).rejects.toThrow(BadRequestException);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
