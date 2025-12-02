import path from 'path';
import 'module-alias/register';
import 'dotenv/config';
// dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
   


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { domainClient } from './data/defaultVariables';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(' BOOTSTRAP STARTED');
  // console.log(process.env.SECRET_SESSION);
  app.enableCors({
    origin: [domainClient],
    credentials: true,
  });
 

   
  app.enableShutdownHooks();

  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SECRET_SESSION!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 31 * 1000 * 60 * 60 * 24,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },

      // exceptionFactory: (errors) => {
      //   return new BadRequestException(
      //     errors.map((err) => ({
      //       field: err.property,
      //       errors: Object.values(err.constraints),
      //     })),
      //   );
      // },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Movie Full Stack App')
    .setDescription('Movie Full Stack App app build on Nest.js+Next.js')
    .setVersion('1.0')
    .addTag(
      'Auth',
      'Registration for became a user. Login, Reset password, verify email',
    )
    .addTag(
      'Users',
      'Only available for authorized user or admin role. Actions: remove user, deactivate user, delete my account, change profile data, get all users',
    )
    .addTag(
      'Movie',
      'Only available for authorized user or admin role. Actions: CRUD operation with movie.',
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'cookie',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      security: [
        {
          'access-token': [],
          'cookie-auth': [],
        },
      ],
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
