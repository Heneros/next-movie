import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { MoviesModule } from './movies/movies.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import Joi from 'joi';
import { ConfigModule } from '@nestjs/config';

import { HealthModule } from './health/health.module';

import { RedisModule } from './redis/redis.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AiAgentModule } from './ai-agent/ai-agent.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        SESSION_SECRET: Joi.string().required(),
      }),
    }),

    AuthModule,
    MailModule,
    MoviesModule,
    CloudinaryModule,
    CqrsModule.forRoot(),
    PrismaModule,
    HealthModule,
    UsersModule,
    RedisModule,
    AnalyticsModule,
    AiAgentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
