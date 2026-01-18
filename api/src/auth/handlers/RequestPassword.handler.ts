import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomBytes } from 'crypto';

import { BadRequestException, HttpException, Inject } from '@nestjs/common';
import { ResetPasswordRequestCommand } from '../commands/RequestResetPassword.command';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { domain, tempRegisterDate } from '@/data';
import { MailService } from '@/mail/mail.service';

@CommandHandler(ResetPasswordRequestCommand)
export class ResetPasswordRequestHandler implements ICommandHandler<ResetPasswordRequestCommand> {
  constructor(
    private readonly mailService: MailService,
    private readonly authRepository: AuthRepository,
    private readonly verifyResetToken: VerifyResetTokenRepository,
  ) {}

  async execute(command: ResetPasswordRequestCommand) {
    try {
      const { email } = command;
      console.log('emailemail', email);
      const user = await this.authRepository.findByEmail(email);

      if (!user) {
        throw new BadRequestException('No user exist');
      }

      const verificationToken = await this.verifyResetToken.findUnique({
        userId: user.id,
      });
      // console.log(user, verificationToken);

      if (verificationToken) {
        await this.verifyResetToken.deleteToken(user.id);
      }
      const resentToken = randomBytes(32).toString('hex');

      const emailToken = await this.verifyResetToken.createToken({
        userId: user.id,
        token: resentToken,

        tempDate: new Date(Date.now() + tempRegisterDate),
      });

      const emailLink = `${domain}/auth/reset_password?emailToken=${emailToken.token}&userId=${user.id}`;

      const data = {
        subject: 'Password Reset Request',
        template: './requestResetPassword.hbs',
        user,
        link: emailLink,
      };

      await this.mailService.requestPassword(
        'Password Reset Request',
        './requestResetPassword.hbs',
        user,
        emailLink,
      );

      return {
        message: 'Email was successfully sent',
        status: 200,
      };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }
      console.error(err);

      throw new BadRequestException('Error sending email', err as any);
    }
  }
}
