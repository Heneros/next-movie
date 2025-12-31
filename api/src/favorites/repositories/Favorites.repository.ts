import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Favorites, PrismaClient } from '@prisma/client';

@Injectable()
export class FavoritesRepository extends AbstractRepositoryPrisma<Favorites> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.favorites;
  }
}
