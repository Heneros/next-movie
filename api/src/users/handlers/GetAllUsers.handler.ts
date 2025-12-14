import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllUsersQuery } from '../queries/GetAllUsers.query';
import { UsersRepository } from '../repository/Users.repository';
import { RedisRepository } from '@/redis/redis.repository';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { NotFoundException } from '@nestjs/common';
import { CACHE_TTL } from '@/data/ttl';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersQuery> {
  constructor(
    // private readonly prisma: PrismaService,
    private readonly redisRepository: RedisRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(query: GetAllUsersQuery) {
    const { page } = query;

    const cached = await this.redisRepository.getWithVersion(
      RedisPrefixEnum.USERS_LIST,
      String(page),
    );

    if (cached) {
      return cached;
    }
    const allUsers = await this.usersRepository.findAllUser(page);

    if (!allUsers || allUsers.length === 0) {
      throw new NotFoundException('No users exist');
    }

    await this.redisRepository.setWithVersion(
      RedisPrefixEnum.USERS_LIST,
      String(page),
      allUsers,
      CACHE_TTL.FIVE_MINUTE,
    );

    return allUsers;
  }
}
