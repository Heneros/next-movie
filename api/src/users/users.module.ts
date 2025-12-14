import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { CloudinaryModule } from '@/cloudinary/cloudinary.module';
import { RedisModule } from '@/redis/redis.module';
import { MailService } from '@/mail/mail.service';
import * as Handlers from './handlers/index';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from './repository/Users.repository';
import { AuthRepository } from '@/auth/repositories/Auth.repository';
import { VisitTrackerService } from './services/visit-tracker.service';

@Module({
  imports: [PrismaModule, PassportModule, CloudinaryModule, RedisModule],
  controllers: [UsersController],
  providers: [
    MailService,
    JwtService,
    VisitTrackerService,
    UsersRepository,
    AuthRepository,
    ...Object.values(Handlers),
  ],
})
export class UsersModule {}
