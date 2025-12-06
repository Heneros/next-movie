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

  async getMonthlyStats(userId: number, monthsBack = 12) {
    const now = new Date();
    const startDate = new Date(
      now.getFullYear(),
      now.getMonth() - monthsBack + 1,
      1,
    );

    const rows: Array<{ year: number; month: number; count: number }> =
      (await this.prismaService.$queryRaw`
      SELECT
        EXTRACT(YEAR FROM "visitDate")::int AS year,
        EXTRACT(MONTH FROM "visitDate")::int AS month,
        COUNT(*)::int AS count
      FROM "ProfileVisit"
      WHERE "userId" = ${userId}
        AND "visitDate" >= ${startDate}
      GROUP BY
        EXTRACT(YEAR FROM "visitDate"),
        EXTRACT(MONTH FROM "visitDate")
      ORDER BY year ASC, month ASC
    `) as any;


    const map = new Map<string, number>();
    for (const r of rows) {
      map.set(`${r.year}-${r.month}`, r.count);
    }


    const result: Array<{
      year: number;
      month: number;
      count: number;
      label: string;
    }> = [];
    for (let i = monthsBack - 1; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const count = map.get(`${year}-${month}`) ?? 0;
      const label = d.toLocaleString('en', { month: 'short' }) + ` ${year}`; 
      result.push({ year, month, count, label });
    }

    return result;
  }

  async getTotalStats(userId: number) {
    const total = await this.model.count({
      where: { userId },
    });

    return {
      totalViews: total,
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
    return months[month - 1] || `Month ${month}`;
  }
}
