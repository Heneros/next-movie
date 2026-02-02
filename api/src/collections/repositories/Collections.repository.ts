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
}
