import { CreateMovieHandler } from '../CreateMovie.handler';
import { CreateMovieCommand } from '../../commands/createMovie.command';
import { BadRequestException } from '@nestjs/common';
import { movieDataTest } from '@/data/testsData';
import { RedisService } from '@/redis/redis.service';

describe('CreateMovieHandler', () => {
  let handler: CreateMovieHandler;

  let movieRepository: {
    findByTitleOrSlug: jest.Mock;
    createMovie: jest.Mock;
  };
  let redisService: {
    deleteFromCache: jest.Mock;
  };

  beforeEach(() => {
    movieRepository = {
      findByTitleOrSlug: jest.fn(),
      createMovie: jest.fn(),
    };

    handler = new CreateMovieHandler(
      redisService as any,
      movieRepository as any,
    );
  });

  it('should create a movie successfully', async () => {
    movieRepository.findByTitleOrSlug.mockResolvedValue(null);

    const createdMovie = { id: 'new-id', ...movieDataTest, createdBy: 1 };
    movieRepository.createMovie.mockReturnValue(createdMovie);
    const result = await handler.execute(
      new CreateMovieCommand(1, movieDataTest),
    );
    expect(movieRepository.findByTitleOrSlug).toHaveBeenCalledWith(
      movieDataTest.title,
      movieDataTest.slug,
    );
    expect(movieRepository.createMovie).toHaveBeenCalledTimes(1);

    expect(result).toEqual(createdMovie);
  });

  it('should throw BadRequestException when movie title already exists', async () => {
    movieRepository.findByTitleOrSlug.mockResolvedValueOnce(movieDataTest);

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
