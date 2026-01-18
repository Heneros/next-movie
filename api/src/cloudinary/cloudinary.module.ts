import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.provider';
import { PrismaModule } from '@/prisma/prisma.module';
import { AvatarRepository } from './repository/AvatarRepository.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { MovieRepository } from '@/movies/repository/Movie.repository';
import { GalleryRepository } from '@/movies/repository/Gallery.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    CloudinaryProvider,
    PrismaService,
    CloudinaryService,
    AvatarRepository,
    GalleryRepository,
    MovieRepository,
  ],
  exports: [CloudinaryProvider, CloudinaryService, PrismaService],
})
export class CloudinaryModule {}
