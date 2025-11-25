import { movieDataTest } from '@/data/testsData';
import { FindOneMovieHandler } from '../FindOneMovie.handler';
import { FindAllMovieQuery, GetIdMovieQuery } from '@/movies/queries';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { FindAllMoviesHandler } from '../FindAllMovies.handler';
import { RedisService } from '@/redis/redis.service';

describe('FindAllMovies', () => {
  let handler: FindAllMoviesHandler;

  let movieRepository: {
    findAllMovie: jest.Mock;
  };

  beforeEach(() => {
    movieRepository = {
      findAllMovie: jest.fn(),
    };

    handler = new FindAllMoviesHandler(
      movieRepository as any,
      RedisService as any,
    );
  });

  it('should find a movie successfully', async () => {
    const foundMovie = { id: 1, ...movieDataTest };
    movieRepository.findAllMovie.mockResolvedValue(foundMovie);

    const result = await handler.execute(new FindAllMovieQuery(1, 1 , 1));

    expect(movieRepository.findAllMovie).toHaveBeenCalledTimes(1);
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

  afterEach(() => {
    jest.clearAllMocks();
  });
});
