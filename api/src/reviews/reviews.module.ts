import { Module } from '@nestjs/common';

import { ReviewsController } from './reviews.controller';
import { ReviewsResolver } from './reviews.resolver';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from '@/prisma/prisma.module';
import { CqrsModule } from '@nestjs/cqrs';
import { RedisModule } from '@/redis/redis.module';
import { AuthRepository } from '@/auth/repositories/Auth.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { MovieRepository } from '@/movies/repository/Movie.repository';

@Module({
  imports: [PrismaModule, CqrsModule, RedisModule],

  controllers: [ReviewsController],
  providers: [
    AuthRepository,
    PrismaService,
    MovieRepository,
    ReviewsResolver,
    JwtService,
  ],
})
export class ReviewsModule {}
