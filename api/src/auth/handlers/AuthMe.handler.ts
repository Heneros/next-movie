import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import bcrypt from 'bcryptjs';
import { LoginUserCommand } from '../commands/LoginUser.command';
import { AuthRepository } from '../repositories/Auth.repository';
import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { ConfigService } from '@nestjs/config';
import { AuthMeQuery } from '../commands';
import { RedisService } from '@/redis/redis.service';

@QueryHandler(AuthMeQuery)
export class AuthMeHandler implements IQueryHandler<AuthMeQuery> {
  constructor(
    private readonly redisService: RedisService,
    private readonly authRepository: AuthRepository,
    private readonly verifyResetToken: VerifyResetTokenRepository,
    public readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(query: AuthMeQuery) {
    const { req } = query;

    const cookieAccess = req.cookies?.jwtMovies;
    const header = req.headers.authorization;

    const token = header?.startsWith('Bearer ')
      ? header.slice(7)
      : cookieAccess;

    if (!token) {
      return { user: null };
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_SECRET'),
      });

      // console.log(payload);

      const user = await this.authRepository.findUnique({
        id: payload.userId,
      });

      if (!user) {
        throw new NotFoundException('No found user');
      }
      //
      return {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role,
        },
      };
    } catch (err: any) {
      // console.error('Error setting cookie or sending response:', err);

      if (
        err.name === 'TokenExpiredError' ||
        err.name === 'JsonWebTokenError' ||
        err instanceof UnauthorizedException
      ) {
        throw new UnauthorizedException('Invalid or expired token');
      }
      throw err;
    }
  }

  // return isPasswordValid;
}
