import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

import { User } from '../interfaces/cus-user';
import { domain } from '../data';

interface ResendEmail {
  username: string;
  link: string;
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmailVerify(
    user: User,
    subject: string,
    message: string,
    template: string,
    emailVerificationToken: string,
  ) {
    // console.log(user);

    const link = `${domain}/auth/verify/${emailVerificationToken}/${user.id}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: subject,
      template: template,

      context: {
        username: user.username,
        link,
        message: message,
      },
    });
  }

  async welcomeEmail(subject: string, template: string, user: User) {
    const link = `${domain}/auth/login`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: subject,
      template: template,
      context: {
        username: user.username,
        link,
      },
    });
  }

  async resendEmail(
    user: User,
    subject: string,
    template: string,
    payload: ResendEmail,
  ) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: subject,
      template: template,
      context: payload,
    });
  }

  async requestPassword(
    subject: string,
    template: string,
    user: User,
    link: string,
  ) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: subject,
      template: template,
      context: {
        username: user.username,
        link,
      },
    });
  }
}
