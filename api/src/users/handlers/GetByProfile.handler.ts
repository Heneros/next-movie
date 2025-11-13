import { IQuery, QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetProfileQuery } from '../queries/GetProfile.query';
import { UsersRepository } from '@/users/repository/Users.repository';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { RedisRepository } from '@/redis/redis.repository';
import { NotFoundException } from '@nestjs/common';
import { CACHE_TTL } from '@/data/ttl';

@QueryHandler(GetProfileQuery)
export class GetByProfileHandler implements IQueryHandler<GetProfileQuery> {
  constructor(
    private redisRepository: RedisRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute(query: GetProfileQuery) {
    const { userId } = query;

    const cached = await this.redisRepository.getWithVersion(
      RedisPrefixEnum.USERS_ID,
      String(userId),
    );
    await this.usersRepository.updateViews(userId);
    if (cached) {
      //   await this.usersRepository.updateViews(userId, 1);
      return cached;
    }

    const profileUser = await this.usersRepository.findById(userId);

    if (!profileUser) {
      throw new NotFoundException('No user found');
    }

    await this.redisRepository.setWithVersion(
      RedisPrefixEnum.USERS_ID,
      String(userId),
      JSON.stringify(profileUser),
      CACHE_TTL.FIVE_MINUTE,
    );

    return profileUser;
  }
}
