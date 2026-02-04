import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Collections, PrismaClient } from '@prisma/client';
import { CreateTvShowDto } from '../dto-input/CreateTvShow.dto';

@Injectable()
export class CollectionsRepository extends AbstractRepositoryPrisma<Collections> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;
  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.collections;
  }

  async findByTitleOrSlug(title: string, slug: string) {
    return await this.findFirst({
      OR: [{ title }, { slug }],
    });
  }
  async createCollections(
    authorId: number,
    createTvShowDto: CreateTvShowDto,
  ): Promise<Collections | null> {
    return await this.create({
      ...createTvShowDto,
      authorId,
    });
  }
async findAllCollections(offset: number, limit: number) {
  const [data, total] = await Promise.all([
    this.model.findMany({
      take: limit,
      skip: offset,
      orderBy: { createdAt: 'desc' },
      include: {
        movies: {
          where: { published: true },        // опционально
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            title: true,
            slug: true,
            posterUrl: true,
            avgRating: true,
          },
          take: 3, // например, вернуть только 3 фильма в каждой коллекции
        }
      }
    }),
    this.model.count(), // при необходимости применяй тот же where/фильтр, что и в findMany
  ]);

  return { data, total };
}
}
