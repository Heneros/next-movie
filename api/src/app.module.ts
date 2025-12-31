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
import { ReviewsModule } from './reviews/reviews.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { isDevelopment } from './data';
import path, { join } from 'path';
import { FavoriteModule } from './favorites/favorites.module';
import { UsersRepository } from './users/repository/Users.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        SESSION_SECRET: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: isDevelopment ? true : false,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
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
    ReviewsModule,
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
