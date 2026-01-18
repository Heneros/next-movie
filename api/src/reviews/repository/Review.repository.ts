import { Injectable } from '@nestjs/common';
import { PrismaClient, Review } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ReviewRepository extends AbstractRepositoryPrisma<Review> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly reviewModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.review;
    this.reviewModel = this.prismaService.review;
  }
}
