import { Module } from '@nestjs/common';
import { RedisRepository } from './redis.repository';
import { RedisService } from './redis.service';
import { RedisProvider } from './redis.provider';

@Module({
  providers: [RedisRepository, RedisService, RedisProvider],
  exports: ['REDIS_CLIENT', RedisRepository, RedisService],
})
export class RedisModule {}
