import { AbstractRepositoryPrisma } from "@/prisma/abstract.repository";
import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaClient, TvShow } from "@prisma/client";
import { CreateTvShowDto } from "../dto-input/CreateTvShow.dto";



@Injectable()
export class TvShowRepository extends AbstractRepositoryPrisma<TvShow> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;
    constructor(private readonly prismaService: PrismaService) {
 super();
    this.prisma = prismaService;
    this.model = this.prisma.movie;

    }

    async findByTitleOrSlug(title: string, slug: string){
      return await this.findFirst({
        OR: [{title}, {slug}]
      })
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
}

