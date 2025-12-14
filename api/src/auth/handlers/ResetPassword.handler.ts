import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ResetPasswordCommand } from '../commands';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { roundsOfHashing } from '@/data';
import { MailService } from '@/mail/mail.service';

@CommandHandler(ResetPasswordCommand)
export class ResetPasswordHandler
  implements ICommandHandler<ResetPasswordCommand>
{
  constructor(
    private readonly verifyResetTokenRepository: VerifyResetTokenRepository,
    private readonly mailService: MailService,
    private readonly authRepository: AuthRepository,
  ) {}

  async execute(command: ResetPasswordCommand) {
    const { userId, resetPasswordDto } = command;
    if (resetPasswordDto.password !== resetPasswordDto.passwordConfirm) {
      throw new BadRequestException('Password do not match');
    }

    const verificationToken = await this.verifyResetTokenRepository.findUnique({
      userId,
    });

    if (!verificationToken || new Date() > verificationToken.expiresAt) {
      throw new BadRequestException(
        'Your token is either invalid or expired. Try resetting your password again',
      );
    }

    const user = await this.authRepository.findById(userId);

    if (user && verificationToken) {
      const newPass = await bcrypt.hash(
        resetPasswordDto.password,
        roundsOfHashing,
      );

      await this.authRepository.updatePassword(user.id, newPass);

      // const data = {
      //   subject: 'Your password was reset successfully!',
      //   template: './resetPasswordSuccess',
      //   user,
      //   link: '/auth/login',
      // };

      await this.mailService.requestPassword(
        'Your password was reset successfully!',
        './resetPasswordSuccess',
        user,
        '/auth/login',
      );
      return {
        message: 'Your password was reset successfully!',
      };
    }
  }
}
