import { AuthRepository } from '@/auth/repositories/Auth.repository';
import { BadRequestException, ForbiddenException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CheckUserExistPipe implements PipeTransform {
  constructor(private authRepository: AuthRepository) {}

  async transform(userId: number): Promise<number | null> {
    if (!userId || isNaN(userId)) {
      throw new BadRequestException('Either userId must be provided 4');
    }
    const user = await this.authRepository.findById(userId);
    if (!user) {
      throw new BadRequestException('No user exists with this data');
    }

    if (user.blocked) {
      throw new ForbiddenException(`User ${user.username} is blocked`);
    }

    return userId;
  }
}
