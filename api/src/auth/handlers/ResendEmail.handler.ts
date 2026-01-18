import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ResendEmailCommand } from '../commands';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { randomBytes } from 'crypto';
import { MailService } from '@/mail/mail.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { tempRegisterDate } from '@/data';
import { AiAgentService } from '@/ai-agent/ai-agent.service';

@CommandHandler(ResendEmailCommand)
export class ResendEmailHandler implements ICommandHandler<ResendEmailCommand> {
  constructor(
    private readonly mailService: MailService,
    private readonly authRepository: AuthRepository,
    private readonly aiAgentService: AiAgentService,

    private readonly verifyResetToken: VerifyResetTokenRepository,
  ) {}

  async execute(command: ResendEmailCommand) {
    const { email } = command;

    const user = await this.authRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // console.log(user);
    if (user.isEmailVerified) {
      throw new BadRequestException('User already verified');
    }

    const token = randomBytes(32).toString('hex');
    const userId = user.id;
    const userToken = await this.verifyResetToken.findUnique({ userId });

    if (userToken) {
      await this.verifyResetToken.deleteToken(userId);
    }

    const emailVerificationToken = await this.verifyResetToken.createToken({
      userId: user.id,
      token,
      // createdAt: now,
      tempDate: new Date(Date.now() + tempRegisterDate),
    });

    const responseAI = await this.aiAgentService.sendMessageWelcome(
      user.username,
    );

    await this.mailService.sendEmailVerify(
      user,
      'Welcome to Movie App! Confirm your Email ',
      '',
      './confirmation',
      emailVerificationToken.token,
    );
    return {
      message: 'Email was successfully sent',
      status: 200,
    };
  }
}
