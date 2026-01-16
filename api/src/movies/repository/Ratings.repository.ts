import { Injectable } from '@nestjs/common';
import { GalleryImage, Movie, PrismaClient, Rating } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { CreateMovieDto } from '../dto-input/create-movie.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';

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
