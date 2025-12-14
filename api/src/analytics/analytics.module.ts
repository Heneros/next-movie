import { Module } from '@nestjs/common';
import * as Handlers from './handlers/index';
import { AnalyticsController } from './analytics.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { CqrsModule } from '@nestjs/cqrs';
import { RedisModule } from '@/redis/redis.module';
import { JwtService } from '@nestjs/jwt';
import { AnalyticsRepository } from './repositories/analytics.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { AuthRepository } from '@/auth/repositories/Auth.repository';

@Module({
  imports: [PrismaModule, CqrsModule, RedisModule],
  controllers: [AnalyticsController],
  providers: [
    AnalyticsRepository,
    AuthRepository,
    PrismaService,
    JwtService,
    ...Object.values(Handlers),
  ],
})
export class AnalyticsModule {}
