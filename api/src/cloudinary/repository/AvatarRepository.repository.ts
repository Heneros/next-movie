import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Avatar, PrismaClient } from '@prisma/client';

@Injectable()
export class AvatarRepository extends AbstractRepositoryPrisma<Avatar> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.avatar;
  }

  async findUniqueByUserId(userId: number) {
    return await this.findUnique(userId);
  }

  async createPreview(url: string, publicId: string, movieId: number) {
    return await this.create({
      url,
      publicId,
      movieId,
    });
  }
  async updatePreview(movieId, previewId) {
    return await this.update(movieId, previewId);
  }
}
