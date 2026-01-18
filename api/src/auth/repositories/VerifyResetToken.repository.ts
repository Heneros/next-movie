import { Injectable } from '@nestjs/common';
import { PrismaClient, VerifyResetToken } from '@prisma/client';
import { tempTokenDate } from '@/data';
import { CreateTokenInput } from '@/interfaces/model.interface';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class VerifyResetTokenRepository extends AbstractRepositoryPrisma<VerifyResetToken> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.verifyResetToken;
  }

  async createToken(data: CreateTokenInput): Promise<VerifyResetToken> {
    return this.model.create({
      data: {
        userId: data.userId,
        token: data.token,
        createdAt: new Date(),
        expiresAt: data.tempDate,
      },
    });
  }

  async findTokenByTokenValue(
    token: string,
    userId,
  ): Promise<VerifyResetToken | null> {
    return this.model.findUnique({ where: { token, userId } });
  }

  async deleteToken(userId: number): Promise<VerifyResetToken> {
    return this.model.delete({ where: { userId } });
  }

  async updateToken(
    userId: number,
    emailToken: string,
  ): Promise<VerifyResetToken> {
    return this.model.upsert({
      where: { userId },
      update: {
        token: emailToken,
        expiresAt: new Date(Date.now() + tempTokenDate),
      },
      create: {
        userId,
        token: emailToken,
        expiresAt: new Date(Date.now() + tempTokenDate),
      },
    });
  }
}
