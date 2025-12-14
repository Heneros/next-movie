import { MovieRepository } from '@/movies/repository/Movie.repository';
import { CreateMovieHandler } from '../CreateMovie.handler';
import { CreateMovieCommand } from '../../commands/createMovie.command';
import { BadRequestException } from '@nestjs/common';
import { movieDataTest } from '@/data/testsData';
import { RedisService } from '@/redis/redis.service';

describe('CreateMovieHandler', () => {
  let handler: CreateMovieHandler;

  let movieRepository: {
    findByTitleUnique: jest.Mock;
    createMovie: jest.Mock;
  };

  beforeEach(() => {
    movieRepository = {
      findByTitleUnique: jest.fn(),
      createMovie: jest.fn(),
    };

    handler = new CreateMovieHandler(
      movieRepository as any,
      RedisService as any,
    );
  });

  it('should create a movie successfully', async () => {
    movieRepository.findByTitleUnique.mockResolvedValue(null);

    const createdMovie = { id: 'new-id', ...movieDataTest, createdBy: 1 };
    movieRepository.createMovie.mockReturnValue(createdMovie);
    const result = await handler.execute(
      new CreateMovieCommand(1, movieDataTest),
    );
    expect(movieRepository.findByTitleUnique).toHaveBeenCalledWith(
      movieDataTest.title,
    );

    expect(movieRepository.createMovie).toHaveBeenCalledTimes(1);

    expect(result).toEqual(createdMovie);
  });

  it('should throw BadRequestException when movie title already exists', async () => {
    movieRepository.findByTitleUnique.mockResolvedValueOnce(movieDataTest);

    const command = await new CreateMovieCommand(1, movieDataTest);

    await expect(handler.execute(command)).rejects.toBeInstanceOf(
      BadRequestException,
    );

    expect(movieRepository.createMovie).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
