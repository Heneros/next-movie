import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterUserCommand } from '../commands/RegisterUser.command';
import { RedisPrefixEnum, roundsOfHashing, tempRegisterDate } from '@/data';
import { randomBytes } from 'crypto';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { BadRequestException, ConflictException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { MailService } from '@/mail/mail.service';
import { RedisRepository } from '@/redis/redis.repository';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly mailService: MailService,
    private readonly redisRepository: RedisRepository,
    private readonly verifyResetToken: VerifyResetTokenRepository,
  ) {}

  async execute(command: RegisterUserCommand) {
    const { registerUserDto } = command;

    if (registerUserDto.password !== registerUserDto.passwordConfirm) {
      throw new BadRequestException('Confirm password');
    }

    const userEmail = await this.authRepository.findByEmailAndUsername(
      registerUserDto.email,
      registerUserDto.username,
    );

    if (userEmail) {
      throw new BadRequestException(
        'User already exists with this email or username',
      );
    }

    try {
      const salt = await bcrypt.genSalt(roundsOfHashing);
      const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);
      const token = randomBytes(32).toString('hex');
      registerUserDto.password = hashedPassword;

      const userData = {
        username: registerUserDto.username,
        email: registerUserDto.email,
        password: hashedPassword,
        provider: 'email',
      };

      const createdUser = await this.authRepository.create(userData);

      const userId = createdUser.id;

      const emailVerificationToken = await this.verifyResetToken.createToken({
        userId,
        token,
        tempDate: new Date(Date.now() + tempRegisterDate),
      });

      const user = {
        username: createdUser.username,
        email: createdUser.email,
        id: createdUser.id,
      };

      await this.mailService.sendEmailVerify(
        user,
        'Welcome to Movie App! Confirm your Email ',
        './confirmation',
        token,
      );

      await this.redisRepository.bumpVersion(RedisPrefixEnum.USERS_LIST);

      return {
        id: userId,
        email: registerUserDto.email,
        name: registerUserDto.username,
        accessToken: emailVerificationToken.token,
      };
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          'User already exists with this email or username',
        );
      }

      throw new BadRequestException(
        error.message || 'Registration failed. Please try again.',
      );
    }
  }
}
