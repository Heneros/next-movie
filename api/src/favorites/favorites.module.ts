import { Module } from '@nestjs/common';

import * as Handlers from './handlers/index';
import { FavoritesController } from './favorites.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { CqrsModule } from '@nestjs/cqrs';
import { RedisModule } from '@/redis/redis.module';
import { FavoritesRepository } from './repositories/Favorites.repository';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { RedisService } from '@/redis/redis.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/prisma/prisma.service';
import { GalleryRepository } from '@/movies/repository/Gallery.repository';
import { MovieRepository } from '@/movies/repository/Movie.repository';
import { AuthRepository } from '@/auth/repositories/Auth.repository';

@Module({
  imports: [PrismaModule, CqrsModule, RedisModule],

  controllers: [FavoritesController],
  providers: [
    ...Object.values(Handlers),
    FavoritesRepository,
    MovieRepository,
    AuthRepository,
    RedisService,
    JwtService,
    PrismaService,
  ],
})
export class FavoriteModule {}
