import { Injectable, Inject } from '@nestjs/common';

// import type { Redis as IORedisClient } from 'ioredis';

import { RedisPrefixEnum } from '../data';
import { CACHE_TTL } from '@/data/ttl';
import Redis from 'ioredis';

// // type AnyRedisClient = UpstashRedisClient | IORedisClient;

// type AnyRedisClient = Redis;
@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS_CLIENT')
    private readonly redis: Redis,
  ) {}

  private makeKey(prefix: RedisPrefixEnum, page: string): string {
    return `${prefix}:${page}`;
  }

  async saveMovies(
    page: string,
    data: any,
    ttl: number = CACHE_TTL.ONE_MINUTE,
  ): Promise<void> {
    const key = this.makeKey(RedisPrefixEnum.MOVIE_LIST, page);
    const value = JSON.stringify(data);
    await this.redis.set(key, value);
    await this.redis.expire(key, ttl);
  }

  async deleteMovies(page: string): Promise<void> {
    const key = this.makeKey(RedisPrefixEnum.MOVIE_LIST, page);
    await this.redis.del(key);
  }

  async deleteMoviesCache(): Promise<void> {
    const pattern = `${RedisPrefixEnum.MOVIE_ID}:*`;
    const keys = await this.redis.keys(pattern);

    if (keys.length > 0) {
      await this.redis.del(keys);
    }
  }
  //   async getMovies(page: string): Promise<string | null> {

  //   }

  async getMovies(page: string): Promise<string | null> {
    const key = this.makeKey(RedisPrefixEnum.MOVIE_LIST, page);
    const result = await this.redis.get(key);

    if (result) {
      return result;
    }

    return null;
  }

  async getMovie(id: number) {
    const key = this.makeKey(RedisPrefixEnum.MOVIE_ID, String(id));
    const result = await this.redis.get(key);
    if (result) {
      return result;
    }

    return null;
  }

  async saveMovie(id: number, data, ttl: number = CACHE_TTL.FIVE_MINUTE) {
    const key = this.makeKey(RedisPrefixEnum.MOVIE_ID, String(id));
    const value = JSON.stringify(data);

    const result = await this.redis.set(key, value);
    await this.redis.expire(key, ttl);
    if (result) {
      return result;
    }

    return null;
  }
  

  
  async deleteMovieCache(id: number): Promise<void> {
    const key = this.makeKey(RedisPrefixEnum.MOVIE_ID, String(id));
    await this.redis.del(key);
  }
}
