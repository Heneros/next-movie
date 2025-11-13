import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaClient, ProfileVisit } from '@prisma/client';

@Injectable()
export class AnalyticsRepository extends AbstractRepositoryPrisma<ProfileVisit> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly profileModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.profileVisit;
  }

  async increaseStat(userId: number, year: number, month: number) {
    const res = await this.model.upsert({
      where: {
        userId_year_month: {
          userId,
          year,
          month,
        },
      },
      update: {
        viewCount: {
          increment: 1,
        },
      },
      create: {
        userId,
        year,
        month,
        viewCount: 1,
      },
    });
    return res;
  }

  async getTotalStats(userId: number) {
    const res = await this.model.aggregate({
      where: { userId },
      _sum: {
        viewCount: true,
      },
    });
    return res;
  }
}
