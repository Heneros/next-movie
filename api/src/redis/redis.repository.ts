import { RedisPrefixEnum } from '../data';
import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';

import Redis from 'ioredis';

@Injectable()
export class RedisRepository {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  private generateKey(prefix: RedisPrefixEnum, key: string, version?: number) {
    return typeof version === 'number'
      ? `${prefix}:v${version}:${key}`
      : `${prefix}:v${1}:${key}`;
  }

  async get<T>(prefix: RedisPrefixEnum, key: string): Promise<T | null> {
    const fullKey = this.generateKey(prefix, key);
    const raw = await this.redis.get(fullKey);
    if (raw == null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch (error) {
      return raw as unknown as T;
    }
    // return await this.redis.get(fullKey);
  }
  async getWithVersion<T>(
    prefix: RedisPrefixEnum,
    key: string,
  ): Promise<T | null> {
    const version = await this.getVersion(prefix);
    const fullKey = this.generateKey(prefix, key, version);
    const raw = await this.redis.get(fullKey);

    if (raw === null) return null;

    try {
      return JSON.parse(raw);
    } catch (error) {
      return raw as unknown as T;
    }
  }

  async setWithVersion<T>(
    prefix: RedisPrefixEnum,
    key: string,
    value: T,
    ttlSeconds?: number,
  ) {
    const version = await this.getVersion(prefix);
    const fullKey = this.generateKey(prefix, key, version);
    const serialized =
      typeof value === 'string' ? (value as any) : JSON.stringify(value);

    if (ttlSeconds && ttlSeconds > 0) {
      await this.redis.set(fullKey, serialized, 'EX', ttlSeconds);
    } else {
      await this.redis.set(fullKey, serialized);
    }
  }

  async set<T>(
    prefix: RedisPrefixEnum,
    key: string,
    value: T,
    ttlSeconds?: number,
  ): Promise<void> {
    const fullKey = this.generateKey(prefix, key);

    // const serialized = value ? (value as any) : JSON.stringify(value);
    const serialized =
      typeof value === 'string'
        ? (value as unknown as string)
        : JSON.stringify(value);
    try {
      if (ttlSeconds && ttlSeconds > 0) {
        await this.redis.set(fullKey, serialized, 'EX', ttlSeconds);
      } else {
        await this.redis.set(fullKey, serialized);
      }
    } catch (err: any) {
      console.error(`Redis SET failed for ${fullKey}: ${err.message}`);
    }
  }

  async delete(prefix: RedisPrefixEnum, key: string): Promise<void> {
    const version = await this.getVersion(prefix);

    const fullKey = this.generateKey(prefix, key, version);
    
    await this.redis.del(`${fullKey}`);
  }

  async getVersion(prefix: RedisPrefixEnum): Promise<number> {
    const k = `${prefix}:version`;
    const v = await this.redis.get(k);
    return v ? parseInt(v, 10) : 1;
  }

  async bumpVersion(prefix: RedisPrefixEnum): Promise<number> {
    const k = `${prefix}:version`;
    return await this.redis.incr(k);
  }

  async flushAll(): Promise<void> {
    await this.redis.flushall();
  }
}
