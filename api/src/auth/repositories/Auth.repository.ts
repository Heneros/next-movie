import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';

import { PrismaService } from '@/prisma/prisma.service';
@Injectable()
export class AuthRepository extends AbstractRepositoryPrisma<User> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly userModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.user;
    this.userModel = this.prismaService.user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findUnique({ email });
  }

  async findByEmailAndUsername(
    email: string,
    username: string,
  ): Promise<User | null> {
    return await this.findFirst({
      OR: [{ email }, { username }],
    });
  }

  async updateProfile(id: number, data): Promise<User | null> {
    return this.update({ id }, data);
  }
  async verifyUser(userId: number) {
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        isEmailVerified: true,
      },
    });
    return updatedUser;
  }

  async findById(id: number) {
    return await this.findUnique({ id });
  }

  async updatePassword(userId: number, newPassword: string) {
    return await this.prisma.user.update({
      where: { id: userId },
      data: { password: newPassword },
    });
  }
}
