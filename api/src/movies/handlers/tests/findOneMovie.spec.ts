import { movieDataTest } from '@/data/testsData';
import { FindOneMovieHandler } from '../FindOneMovie.handler';
import { GetIdMovieQuery } from '@/movies/queries';
import { NotFoundException } from '@nestjs/common';
import { RedisService } from '@/redis/redis.service';

describe('FindOneMovieHandler', () => {
  let handler: FindOneMovieHandler;

  let movieRepository: {
    findByIdUnique: jest.Mock;
  };

  beforeEach(() => {
    movieRepository = {
      findByIdUnique: jest.fn(),
    };

    handler = new FindOneMovieHandler(
      movieRepository as any,
      RedisService as any,
    );
  });

  it('should find a movie successfully', async () => {
    const foundMovie = { id: 1, ...movieDataTest };
    movieRepository.findByIdUnique.mockResolvedValue(foundMovie);

    const result = await handler.execute(new GetIdMovieQuery(1));

    expect(movieRepository.findByIdUnique).toHaveBeenCalledTimes(1);
    // expect(movieRepository.findByIdUnique.mock.calls[0][0]).toBe(1);

    expect(result).toEqual(foundMovie);
  });

  //   it('should throw BadRequestException when repository throws', async () => {
  //     movieRepository.findByIdUnique.mockRejectedValue(new Error('DB error'));
  //     await expect(
  //       handler.execute(new GetIdMovieQuery(5)),
  //     ).rejects.toBeInstanceOf(BadRequestException);

  //     expect(movieRepository.findByIdUnique).toHaveBeenCalledWith(5);
  //   });

  it('should throw NotFoundException when movie is not found', async () => {
    movieRepository.findByIdUnique.mockResolvedValue(null);
    await expect(
      handler.execute(new GetIdMovieQuery(123)),
    ).rejects.toBeInstanceOf(NotFoundException);

    expect(movieRepository.findByIdUnique).toHaveBeenCalledWith(123);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
