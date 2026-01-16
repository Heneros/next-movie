import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RedisService } from '@/redis/redis.service';
import { RateMovieCommand } from '../commands';
import { MovieRepository } from '../repository/Movie.repository';
import { RatingRepository } from '../repository/Ratings.repository';

@CommandHandler(RateMovieCommand)
export class RateMovieMovieHandler implements ICommandHandler<RateMovieCommand> {
  constructor(
    private readonly redisService: RedisService,
        private readonly ratingRepository: RatingRepository,

  ) {}

  async execute(command: RateMovieCommand) {
    const { movieId, userId, value} = command;


    const rateExistMovie = await this.ratingRepository.findUnique({
      movieId,
      userId
    })

    if(rateExistMovie){
      await this.ratingRepository.update(rateExistMovie.id, value)
    }else{
      await  this.ratingRepository.create( { movieId,
      userId, value})
    }

const ratings  = await this.ratingRepository.findMany({
where: {movieId},
//    select: {value: true}
});

const total = ratings.reduce((sum, r) => sum + r.value, 0);
const avg = ratings.length > 0 ? total / ratings.length : 0


return await this.ratingRepository.update({where: {movieId},  data: {  value: avg}})
  }
}
