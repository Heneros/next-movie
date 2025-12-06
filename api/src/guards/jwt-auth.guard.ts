import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { UsersRepository } from '@/users/repository/Users.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    // private readonly prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const contextType = context.getType().toString();
    let request;

    if (contextType === 'http') {
      request = context.switchToHttp().getRequest();
    } else if (contextType === 'ws') {
      const wsClient = context.switchToWs().getClient();
      request = wsClient.handshake;
    } else {
      const gqlContext = GqlExecutionContext.create(context);
      request = gqlContext.getContext().req;
    }

    // const req = context.switchToHttp().getRequest<Request>();

    // const token = request.cookies.jwtMovies;
    const authHeader = request.headers?.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No authorization header');
    }

    const token = authHeader?.split('Bearer ')[1];
    if (!token) {
      throw new BadRequestException('No token provided');
    }

    const roles = this.reflector.getAllAndOverride('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log(request.user);

    if (roles.length > 0) {
      try {
        const payload = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        });

        const hasRole = roles.some((role) => roles.includes(role));
        if (!hasRole) {
          return false;
        }

        if (roles.some((role) => payload.roles.includes(role))) {
          request.user = payload;
          return true;
        }
        return false;
      } catch (error) {
        // if (error instanceof BadRequestException || UnauthorizedException) {
        //   return error;
        // }
        // console.error('error', error);
        return false;
      }
    }

    return true;
  }

  // private extractBearerToken(authHeader: string): string | null {
  //   if (!authHeader) return null;

  //   const [scheme, creds] = authHeader.split(' ');
  //   return scheme === 'Bearer' ? creds : null;
  // }
}
