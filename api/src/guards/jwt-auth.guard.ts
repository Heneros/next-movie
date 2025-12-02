import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(ctx: ExecutionContext): boolean | Observable<boolean> {
    const req = ctx.switchToHttp().getRequest<Request>();

    const token = req.cookies.jwtMovies;

    if (!token) {
      throw new UnauthorizedException('Authentication token is missing');
    }

    const payload = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });

    req.user = payload;

    return true;
  }

  // private extractBearerToken(authHeader: string): string | null {
  //   if (!authHeader) return null;

  //   const [scheme, creds] = authHeader.split(' ');
  //   return scheme === 'Bearer' ? creds : null;
  // }
}
