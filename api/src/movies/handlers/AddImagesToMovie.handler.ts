import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../commands/createMovie.command';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { MovieRepository } from '../repository/Movie.repository';
import { RedisPrefixEnum } from '@/data';
import { RedisService } from '@/redis/redis.service';
import { AddImagesGalleryToMovie } from '../commands/addImagesGallery.command';
import { GalleryRepository } from '../repository/Gallery.repository';
import { PrismaService } from '@/prisma/prisma.service';

@CommandHandler(AddImagesGalleryToMovie)
export class CreateMovieHandler implements ICommandHandler<AddImagesGalleryToMovie> {
  constructor(
    private readonly redisService: RedisService,

    private readonly galleryRepository: GalleryRepository
  ) {}

  async execute(command: AddImagesGalleryToMovie) {
    const { movieId, images } = command;


   const existingCount = await this.galleryRepository.count(movieId)
  

    const galleryImages = images.map((image, index) => ({
        ...image, 
        movieId,
        order: image.order ?? existingCount + index,
    }))

    return await this.galleryRepository.createMany(galleryImages)
  }
}
