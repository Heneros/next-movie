import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { isDevelopment, isTest } from '../data/defaultVariables';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

const templateDir = isDevelopment
  ? join(process.cwd(), 'src', 'mail', 'templates')
  : join(process.cwd(), 'templates');

console.log('USE_MAILDEV_DOCKER', process.env.USE_MAILDEV_DOCKER);

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: isDevelopment
          ? process.env.USE_MAILDEV_DOCKER === 'true'
            ? 'maildev'
            : '127.0.0.1'
          : process.env.SMTP_HOST,
        secure: isDevelopment ? false : true,
        port: isDevelopment ? 1025 : 587,
        auth: isDevelopment
          ? null
          : {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD,
            },
      },
      defaults: {
        from: `"No Replay" <noreply@example.com>`,
      },
      ...(isTest
        ? {}
        : {
            template: {
              dir: templateDir,
              adapter: new HandlebarsAdapter(),
              options: {
                strict: true,
              },
            },
          }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
