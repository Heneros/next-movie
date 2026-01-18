import { Injectable } from '@nestjs/common';
import { GalleryImage, Movie, PrismaClient } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { CreateMovieDto } from '../dto-input/create-movie.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';

@Injectable()
export class GalleryRepository extends AbstractRepositoryPrisma<GalleryImage> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly galleryModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.galleryImage;
    this.galleryModel = this.prismaService.galleryImage;
  }

  async count(movieId) {
    return await this.galleryModel.count({
      where: { movieId },
    });
  }
}
