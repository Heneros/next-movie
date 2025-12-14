import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { VerifyUserQuery } from '../query';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { MailService } from '@/mail/mail.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@QueryHandler(VerifyUserQuery)
export class VerifyUserHandler implements IQueryHandler<VerifyUserQuery> {
  constructor(
    private readonly mailService: MailService,
    private readonly verifyResetTokenRepository: VerifyResetTokenRepository,
    private readonly authRepository: AuthRepository,
  ) {}

  async execute(query: VerifyUserQuery) {
    const { token, userId } = query;

    const user = await this.authRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('User not found ');
    }
    if (user?.isEmailVerified) {
      throw new BadRequestException('Email already verified');
    }

    const emailVerificationToken =
      await this.verifyResetTokenRepository.findTokenByTokenValue(
        token,
        user.id,
      );

    if (!emailVerificationToken) {
      throw new NotFoundException('Not found token');
    }

    if (new Date() > emailVerificationToken.expiresAt) {
      throw new BadRequestException('Expired token or invalid token');
    }
    await this.authRepository.verifyUser(emailVerificationToken.userId);

    await this.verifyResetTokenRepository.updateToken(
      emailVerificationToken.userId,
      emailVerificationToken.token,
    );

    await this.mailService.welcomeEmail(
      'Your email is verified!',
      './welcome',
      user,
    );
    return {
      id: user.id,
      message: 'Your email is verified!',
    };
  }
}
