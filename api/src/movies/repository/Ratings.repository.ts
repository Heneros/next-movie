import { Injectable } from '@nestjs/common';
import {  PrismaClient, Rating } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';


@Injectable()
export class RatingRepository extends AbstractRepositoryPrisma<Rating> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly ratingModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.rating;
    this.ratingModel = this.prismaService.rating;
  }


}
