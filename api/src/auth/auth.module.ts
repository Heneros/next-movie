import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

import * as Handlers from './handlers/index';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from '../mail/mail.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthRepository } from './repositories/Auth.repository';
import { UsersController } from '../users/users.controller';
import { VerifyResetTokenRepository } from './repositories/VerifyResetToken.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { HandleIOAuth } from './services/HandleIOAuth.service';
import { PassportModule } from '@nestjs/passport';
import { CloudinaryModule } from '@/cloudinary/cloudinary.module';
import { GithubStrategy } from './passport/GithubStrategy';
import { GoogleStrategy } from './passport/GoogleStrategy';
import { PassportService } from './services/Passport.service';
import { RedisModule } from '@/redis/redis.module';
import { AiAgentService } from '@/ai-agent/ai-agent.service';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
    CloudinaryModule,
    RedisModule,
  ],
  controllers: [AuthController],
  providers: [
    MailService,
    AuthRepository,
    UsersController,

    PassportService,
    HandleIOAuth,
    VerifyResetTokenRepository,
    PrismaService,
    GoogleStrategy,
    GithubStrategy,
    AiAgentService,
    ...Object.values(Handlers),
  ],
})
export class AuthModule {}
