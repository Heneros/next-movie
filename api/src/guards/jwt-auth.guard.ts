import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

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

    ///const authHeader = request.headers?.authorization;
const token = request.cookies?.jwtMovies;

if (!token) {
  throw new UnauthorizedException('No token cookie provided');
}

    const roles = this.reflector.getAllAndOverride('role', [
      context.getHandler(),
      context.getClass(),
    ]);



    if (roles?.length > 0) {
      try {
        const payload = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        });
    console.log(payload);

    const hasRole = roles.some((role) => payload.role.includes(role));
    if (!hasRole) {   
      throw new UnauthorizedException('Insufficient permissions');
     
    }

    request.user = payload;
    return true;
    // if (!hasRole) {
        //   return false;
        // }

        // if (roles.some((role) => payload.roles.includes(role))) {
        //   request.user = payload;
        //   return true;
        // }
        // return false;
      } catch (error) {
        // if (error instanceof BadRequestException || UnauthorizedException) {
        //   return error;
        // }
        console.error('error', error);
        return false;
      }
    }

    return true;
  }
}
