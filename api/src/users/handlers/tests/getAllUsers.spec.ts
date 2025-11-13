import { RedisRepository } from '@/redis/redis.repository';
import { GetAllUsersHandler } from '../GetAllUsers.handler';
import { UsersRepository } from '@/users/repository/Users.repository';
import bcrypt from 'bcryptjs';
import { GetAllUsersQuery } from '@/users/queries/GetAllUsers.query';
import { User } from '@prisma/client';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { NotFoundException } from '@nestjs/common';

describe('GetAllUsers QueryHandler', () => {
  let handler: GetAllUsersHandler;
  let redisRepository: jest.Mocked<RedisRepository>;
  let userRepository: jest.Mocked<UsersRepository>;

  const createMockUser = (overrides?: Partial<User>): User => ({
    id: 1,
    email: 'test@example.com',
    username: 'Tester',
    password: '123456qwert',
    blocked: false,
    role: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
    isEmailVerified: true,
    refreshToken: [],
    profileViews: 0,
    payment: 'bank',
    provider: '',
    providerId: '',
    googleId: '',
    githubId: '',
    discordId: '',
    ...overrides,
  });

  beforeEach(() => {
    redisRepository = {
      getWithVersion: jest.fn(),
      setWithVersion: jest.fn(),
      get: jest.fn(),
      set: jest.fn(),
      delete: jest.fn(),
      deleteByPrefix: jest.fn(),
      flushAll: jest.fn(),
    } as any;

    userRepository = {
      findAllUser: jest.fn(),
    } as any;

    handler = new GetAllUsersHandler(redisRepository, userRepository);
  });
  it('FindAllUsers - should return users from cache if available', async () => {
    const mockUser = createMockUser();
    const page = 1;

    redisRepository.getWithVersion.mockResolvedValue([mockUser]);

    const res = await handler.execute(new GetAllUsersQuery(page));

    // const query = new GetAllUsersQuery(page);

    // const res = await handler.execute(query);
    expect(redisRepository.getWithVersion).toHaveBeenCalledWith(
      RedisPrefixEnum.USERS_LIST,
      String(page),
    );
    expect(userRepository.findAllUser).not.toHaveBeenCalled();
    expect(res).toEqual([mockUser]);
    // expect(res).toEqual([fakeUser]);
  });
  it('should fetch from repository and cache when no cache exists', async () => {
    const mockUsers = [
      createMockUser(),
      createMockUser({ id: 2, email: 'test2@example.com' }),
    ];
    redisRepository.getWithVersion.mockResolvedValue(null);
    userRepository.findAllUser.mockResolvedValue(mockUsers);
    const res = await handler.execute(new GetAllUsersQuery(1));

    expect(redisRepository.getWithVersion).toHaveBeenCalledWith(
      RedisPrefixEnum.USERS_LIST,
      String(1),
    );
    expect(userRepository.findAllUser).toHaveBeenCalledWith(1);
    expect(redisRepository.setWithVersion).toHaveBeenCalled();

    expect(res).toEqual(mockUsers);
  });
  it('should throw NotFoundException', async () => {
    redisRepository.getWithVersion.mockResolvedValue(null);
    userRepository.findAllUser.mockResolvedValue([]);
    //const res = await handler.execute(new GetAllUsersQuery(1));
    await expect(handler.execute(new GetAllUsersQuery(1))).rejects.toThrow(
      new NotFoundException('No users exist'),
    );
  });
  it('should throw NotFoundException when repository returns null', async () => {
    redisRepository.getWithVersion.mockResolvedValue(null);
    userRepository.findAllUser.mockResolvedValue(null);

    const query = new GetAllUsersQuery(1);

    await expect(handler.execute(query)).rejects.toThrow(
      new NotFoundException('No users exist'),
    );
  });
});
