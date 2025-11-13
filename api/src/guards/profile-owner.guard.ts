import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProfileOwnerGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    let request: any;
    let idFromParams: number | null = null;
    if (context.getType() === 'http') {
      request = context.switchToHttp().getRequest();
      idFromParams = +request.params.userId;
    }

    const authHeader = request.headers?.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No authorization header');
    }

    const token = authHeader?.split('Bearer ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    let userIdFromToken: number;

    try {
      // const payload = this.jwtService.verify(token, {
      //   secret: process.env.JWT_SECRET,
      // });
      const decodedToken = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });

    //  console.log(decodedToken);

      userIdFromToken = decodedToken.id;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    if (!idFromParams || userIdFromToken !== idFromParams) {
      throw new ForbiddenException(
        'You are not authorized to action to this profile',
      );
    }
    return true;
  }
}
