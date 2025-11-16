import { Module } from '@nestjs/common';

import { MoviesController } from './movies.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { MovieRepository } from './repository/Movie.repository';
import * as Handlers from './handlers/index';
import { PrismaService } from '@/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CqrsModule } from '@nestjs/cqrs';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { AvatarRepository } from '@/cloudinary/repository/AvatarRepository.repository';
import { RedisService } from '@/redis/redis.service';
import { RedisModule } from '@/redis/redis.module';
import { AgentService } from './agent.service';

@Module({
  imports: [PrismaModule, CqrsModule, RedisModule],
  controllers: [MoviesController],
  providers: [
    ...Object.values(Handlers),
    MovieRepository,
    AvatarRepository,
    CloudinaryService,
    RedisService,
    JwtService,
    AgentService,
    PrismaService,
  ],
})
export class MoviesModule {}
