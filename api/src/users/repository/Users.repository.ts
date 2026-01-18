import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository extends AbstractRepositoryPrisma<User> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.user;
  }

  async findAllUser(skip: number): Promise<User[] | null> {
    return await this.prisma.user.findMany({
      skip,
      take: PAGINATION_LIMIT,
    });
  }

  async findById(userId: number): Promise<User | null> {
    return this.findUnique({ id: userId });
  }
  async updateUser(
    userId: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return await this.update({ id: userId }, { ...updateUserDto });
  }
  async updateViews(
    userId: number,
    // currentViews: number,
  ): Promise<User | null> {
    return await this.update(
      { id: userId },

      { profileViews: { increment: 1 } },
    );
  }
}
