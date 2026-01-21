import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaClient, TvShow } from '@prisma/client';
import { CreateTvShowDto } from '../dto-input/CreateTvShow.dto';
import { FilterTvShows } from '../dto-input/Filter-tvShows.dto';

@Injectable()
export class TvShowRepository extends AbstractRepositoryPrisma<TvShow> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;
  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.movie;
  }

  async findByTitleOrSlug(title: string, slug: string) {
    return await this.findFirst({
      OR: [{ title }, { slug }],
    });
  }
  async createTvShow(
    authorId: number,
    createTvShowDto: CreateTvShowDto,
  ): Promise<TvShow | null> {
    return await this.create({
      ...createTvShowDto,
      authorId,
    });
  }

  async findAllTvShows(
    offset: number,
    limit: number,
    filterTvShows: FilterTvShows,
  ) {
    const {
      year,
      category,
      minRating,
      orderBy = 'title',
      order = 'desc',
    } = filterTvShows;
    const where: any = {};

    if (year) {
      where.year = Number(year);
    }

    if (minRating) {
      where.avgRating = { gte: Number(minRating) };
    }

    if (category) {
      where.category = { has: category };
    }

    const orderByObj = {};
    const allowedOrderFields = [
      'title',
      'year',
      'avgRating',
      'id',
      'category',
      'createdAt',
      'updatedAt',
    ];

    const safeOrderBy = allowedOrderFields.includes(orderBy)
      ? orderBy
      : 'title';

    const safeOrder = order === 'asc' ? 'asc' : 'desc';

    orderByObj[safeOrderBy] = safeOrder;

    const [data, total] = await this.prisma.$transaction([
      this.model.findMany({
        skip: offset,
        take: limit,
        where,
        orderBy: orderByObj,
      }),
      this.model.count({ where }),
    ]);
    return [data, total] as const;
  }
}
