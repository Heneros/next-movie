import { Injectable } from '@nestjs/common';
import { Movie, PrismaClient } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { CreateMovieDto } from '../dto-input/create-movie.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PAGINATION_LIMIT } from '@/data/defaultVariables';

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

  async findAllMovie(skip: number) {
    return await this.model.findMany({
      skip,
      take: PAGINATION_LIMIT,
      orderBy: {
        id: 'asc',
      },
    });
  }
  //   async removeMovie(id: number) {
  //     const movie = Promise.all([
  //       this.prisma.reviews.deleteMany({ where: { movieId: id } }),
  //       this.prisma.rating.deleteMany({ where: { movieId: id } }),
  //       this.prisma.movie.delete({ where: { id } }),
  //     ]);
  //     return movie;
  //   }
}
