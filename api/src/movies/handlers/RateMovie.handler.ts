import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RedisService } from '@/redis/redis.service';
import { RateMovieCommand } from '../commands';
import { RatingRepository } from '../repository/Ratings.repository';
import { PrismaService } from '@/prisma/prisma.service';

@CommandHandler(RateMovieCommand)
export class RateMovieMovieHandler implements ICommandHandler<RateMovieCommand> {
  constructor(
    private readonly redisService: RedisService,
    private readonly ratingRepository: RatingRepository,
    private readonly prisma: PrismaService,
  ) {}

  async execute(command: RateMovieCommand) {
    const { movieId, userId, value } = command;

    // console.log( movieId, userId,   value)
    const result = await this.prisma.$transaction(async (tx) => {
      const rating = await tx.rating.upsert({
        where: { userId_movieId: { userId, movieId } },
        create: { userId, movieId, value },
        update: { value },
      });

      const agg = await tx.rating.aggregate({
        where: { movieId },
        _avg: { value: true },
        _count: { _all: true },
      });

      const avg = agg._avg.value ?? 0;
      const count = agg._count._all ?? 0;

      await tx.movie.update({
        where: { id: movieId },
        data: { avgRating: avg },
      });
      return { rating, avg, count };
    });
    return result;

  }
}
