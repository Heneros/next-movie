import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Collections, PrismaClient } from '@prisma/client';

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

  async findAllCollections(offset: number, limit: number) {
    const [data, total] = await Promise.all([
      this.model.findMany({
        take: limit,
        skip: offset,
        orderBy: { createdAt: 'desc' },
        include: {
          movies: {
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            select: {
              id: true,
              title: true,
              slug: true,
              posterUrl: true,
              avgRating: true,
            },
            take: 3,
          },
        },
      }),
      this.model.count(),
    ]);

    return { data, total };
  }

  async findById(collectionId: number) {
    const res = await this.model.findUnique({
      where: {
        id: collectionId,
      },
      include: {
        movies: true,
      },
    });
    return res;
  }

  async addMovieToCollection(collectionId: number, movieId) {
    const res = await this.model.update({
      where: {
        id: collectionId,
      },
      data: {
        movies: {
          connect: {
            id: movieId,
          },
        },
      },
    });
  }
}
