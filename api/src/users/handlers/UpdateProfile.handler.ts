import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as bcrypt from 'bcrypt';

import { UpdateProfileCommand } from '../commands/UpdateProfile.command';
import { UsersRepository } from '../repository/Users.repository';
import { NotFoundException } from '@nestjs/common';
import { roundsOfHashing } from '@/data/defaultVariables';
import { RedisRepository } from '@/redis/redis.repository';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';

@CommandHandler(UpdateProfileCommand)
export class UpdateProfileHandler
  implements ICommandHandler<UpdateProfileCommand>
{
  constructor(
    private redisRepository: RedisRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute(command: UpdateProfileCommand) {
    const { id, updateUserDto } = command;

    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException('No user found');
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    const updatedUser = await this.usersRepository.updateUser(
      id,
      updateUserDto,
    );

    await this.redisRepository.delete(RedisPrefixEnum.USERS_ID, String(id));


    return updatedUser;
  }
}
