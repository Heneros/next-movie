import { PrismaModule } from '@/prisma/prisma.module';
import { RedisModule } from '@/redis/redis.module';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TvShowController } from './tv-shows.controller';

import * as Handlers from './handlers/index';

import { RedisService } from '@/redis/redis.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/prisma/prisma.service';
import { CloudinaryModule } from '@/cloudinary/cloudinary.module';
import { TvShowRepository } from './repositories/TvShow.repository';

@Module({
  imports: [PrismaModule, CqrsModule, RedisModule, CloudinaryModule],
  controllers: [TvShowController],
  providers: [
    ...Object.values(Handlers),
    TvShowRepository,
    // RedisService,
    JwtService,
    PrismaService,
  ],
})
export class TvShowsModule {}
