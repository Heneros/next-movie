import { Injectable } from '@nestjs/common';
import { Movie, PrismaClient } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { CreateMovieDto } from '../dto-input/create-movie.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';
import { FilterMovieDto } from '../dto-input/filter-movie.dto';

@Injectable()
export class MovieRepository extends AbstractRepositoryPrisma<Movie> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly movieModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.movie;
    this.movieModel = this.prismaService.movie;
  }

  async createMovie(
    authorId: number,
    createMovieDto: CreateMovieDto,
  ): Promise<Movie | null> {
    return await this.create({
      ...createMovieDto,
      authorId,
    });
  }

  async findByIdUnique(id: number): Promise<Movie | null> {
    return await this.findUnique({ id });
  }

  async findByTitleOrSlug(title: string, slug: string): Promise<Movie | null> {
    return await this.findFirst({
      OR: [{ title: title }, { slug: slug }],
    });
  }

  async findAuthorMovie(authorId: number): Promise<Movie | null> {
    return await this.findUnique({
      where: {
        authorId,
      },
    });
  }

  async getAllMoviesIn(
    skip: number,
    movieIds: number[],
  ): Promise<Movie[] | null> {
    return await this.findMany({
      skip,
      take: PAGINATION_LIMIT,
      where: {
        id: { in: movieIds },
      },
    });
  }

  async findAllMovie(
    offset: number,
    limit: number,
    filterMovieDto: FilterMovieDto,
  ) {
    const {
      year,
      category,
      minRating,
      orderBy = 'title',
      order = 'desc',
    } = filterMovieDto;

    const where: any = {};

    if (year) {
      where.year = Number(year);
    }

    if (minRating) {
      where.avgRating = { gte: Number(minRating) };
    }

    if (category) {
      where.category = { has: category };
    }

    const orderByObj = {}
  const allowedOrderFields = ['title', 'year', 'avgRating', 'id', 'createdAt', 'updatedAt'];
   const safeOrderBy = allowedOrderFields.includes(orderBy) ? orderBy : 'title';
  const safeOrder = order === 'asc' ? 'asc' : 'desc';
  orderByObj[safeOrderBy] = safeOrder
    const [data, total] = await this.prisma.$transaction([
      this.model.findMany({
        skip: offset,
        take: limit,
        where,
        orderBy:orderByObj
      }),
      this.model.count({ where }),
    ]);

    return [data, total] as const;
  }
}
