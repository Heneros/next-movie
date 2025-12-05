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

  async getMonthlyStats(userId: number, months: number = 12) {
    const startDate = new Date();

    startDate.setMonth(startDate.getMonth() - months);

    const result: any[] = await this.prismaService.$queryRaw`
    SELECT 
      EXTRACT(YEAR FROM "visitDate") as year,
      EXTRACT(MONTH FROM "visitDate") as month,
      COUNT(*)::integer as count
    FROM "ProfileVisit"
    WHERE "userId" = ${userId}
      AND "visitDate" >= ${startDate}
    GROUP BY 
      EXTRACT(YEAR FROM "visitDate"),
      EXTRACT(MONTH FROM "visitDate")
    ORDER BY year DESC, month DESC
    LIMIT ${months}
  `;

    return result.map((row) => ({
      year: Number(row.year),
      month: Number(row.month),
      count: Number(row.count),
      label: `${this.getMonthName(Number(row.month))} ${row.year}`,
    }));
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
    const result = await this.model.aggregate({
      where: { userId },
      _count: {
        _all: true,
      },
    });
    return {
      totalViews: result._count._all || 0,
    };
  }

  private getMonthName(month: number): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return months[month - 1] || '';
  }
}
