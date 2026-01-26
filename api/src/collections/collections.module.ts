import { PrismaModule } from '@/prisma/prisma.module';
import { RedisModule } from '@/redis/redis.module';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import * as Handlers from './handlers/index';

import { RedisService } from '@/redis/redis.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/prisma/prisma.service';
import { CloudinaryModule } from '@/cloudinary/cloudinary.module';
import { CollectionsRepository } from './repositories/Collections.repository';
import { CollectionsController } from './collections.controller';

@Module({
  imports: [PrismaModule, CqrsModule, RedisModule, CloudinaryModule],
  controllers: [CollectionsController],
  providers: [
    ...Object.values(Handlers),
    CollectionsRepository,
    // RedisService,
    JwtService,
    PrismaService,
  ],
})
export class CollectionsModule {}
