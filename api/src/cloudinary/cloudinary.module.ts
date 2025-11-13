import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.provider';
import { PrismaModule } from '@/prisma/prisma.module';
import { AvatarRepository } from './repository/AvatarRepository.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CloudinaryProvider,
    PrismaService,
    CloudinaryService,
    AvatarRepository,
  ],
  exports: [CloudinaryProvider, CloudinaryService, PrismaService],
})
export class CloudinaryModule {}
