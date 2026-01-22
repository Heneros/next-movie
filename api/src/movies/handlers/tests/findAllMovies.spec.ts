import { movieDataTest } from '@/data/testsData';
import { FindOneMovieHandler } from '../FindOneMovie.handler';
import { FindAllMovieQuery, GetIdMovieQuery } from '@/movies/queries';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { FindAllMoviesHandler } from '../FindAllMovies.handler';
import { RedisService } from '@/redis/redis.service';
import { FilterMovieDto } from '@/movies/dto-input/filter-movie.dto';

describe('FindAllMovies', () => {
  let handler: FindAllMoviesHandler;

  let movieRepository: {
    findAllMovie: jest.Mock;
  };

 let redisService: {
      getDataMultiple: jest.Mock;
      saveItemsMultiple: jest.Mock;
    };
  beforeEach(() => {
    movieRepository = {
      findAllMovie: jest.fn(),
    };
     redisService = {
      getDataMultiple: jest.fn(),
       saveItemsMultiple:jest.fn(),
      
    };

    handler = new FindAllMoviesHandler(
        redisService as any,
      movieRepository as any,
 
    );
  });

  it('should find a movie successfully', async () => {
    const foundMovie = { id: 1, ...movieDataTest };
    const filtersMovie = new FilterMovieDto();

      redisService.getDataMultiple.mockResolvedValue(null);

    movieRepository.findAllMovie.mockResolvedValue([
          [{ id: 1, title: 'Test movie' }],
    1,
    ]);

    const result = await handler.execute(
    {      offset: 0,
    limit: 10,
    page: 1,
    filters: {},}
    /// new FindAllMovieQuery(1, 1, 1, filtersMovie),
    );

    // expect(movieRepository.findAllMovie).toHaveBeenCalledTimes(1);
    // expect(movieRepository.findByIdUnique.mock.calls[0][0]).toBe(1);

    expect(result).toEqual({
       data: [{ id: 1, title: 'Test movie' }],
    total: 1,
    });
    expect(redisService.saveItemsMultiple).toHaveBeenCalled()
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
