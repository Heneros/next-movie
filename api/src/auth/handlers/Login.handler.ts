import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import bcrypt from 'bcryptjs';
import { LoginUserCommand } from '../commands/LoginUser.command';
import { AuthRepository } from '../repositories/Auth.repository';
import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';

@CommandHandler(LoginUserCommand)
export class LoginUserHandler implements ICommandHandler<LoginUserCommand> {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly verifyResetToken: VerifyResetTokenRepository,
    private readonly cloudinaryService: CloudinaryService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(command: LoginUserCommand) {
    const { logInDto } = command;
    try {
      const user = await this.authRepository.findByEmail(logInDto.email);

      if (!user) {
        throw new BadRequestException('User not found');
      }

      if (user.blocked) {
        throw new BadRequestException('User is blocked');
      }

      const isPasswordValid = await bcrypt.compare(
        logInDto.password,
        user.password,
      );

      if (!isPasswordValid) {
        throw new BadRequestException('Invalid password');
      }
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const accessToken = await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      });
      const refreshToken = await this.jwtService.signAsync(payload, {
        expiresIn: '31d',
      });

      await this.verifyResetToken.deleteToken(user.id);

      await this.verifyResetToken.updateToken(user.id, refreshToken);

      await this.authRepository.updateProfile(user.id, {
        refreshToken: [refreshToken],
      });

      const avatar = await this.cloudinaryService.getImageAvatar(user.id);

      return {
        accessToken,
        refreshToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          imageUrl: avatar ?? null,
        },
      };
    } catch (error) {
      console.error('Error setting cookie or sending response:', error);
      throw error;
    }
    // return isPasswordValid;
  }
}
