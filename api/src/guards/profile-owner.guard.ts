import { UsersRepository } from '@/users/repository/Users.repository';
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
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No authorization header');
    }

    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    let payload: any;

    try {
      payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      const userExist = await this.usersRepository.findById(payload.id);

      if (userExist.id === payload.id) {
        return true;
      }
      return false;

      // console.log(userExist);
    } catch {
      throw new UnauthorizedException('Invalid token');
    }

    // const userIdFromToken = payload.id;
    // const userIdFromParams = +request.params.userId;

    // if (userIdFromToken !== userIdFromParams) {
    //   throw new ForbiddenException('Not your profile');
    // }
  }
}
