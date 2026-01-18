import {
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { EmailDto } from '../auth/dto';
import { AuthRepository } from '@/auth/repositories/Auth.repository';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  constructor(private authRepository: AuthRepository) {}

  async transform(email: EmailDto) {
    if (!email.email) {
      throw new BadRequestException('Email must be provided');
    }

    const user = await this.authRepository.findByEmail(email.email);

    if (!user) {
      throw new NotFoundException('No user exists with this email');
    }

    if (!user.isEmailVerified) {
      throw new BadRequestException('Email not verified');
    }
    if (user.blocked) {
      throw new BadRequestException('User is blocked');
    }
    return email;
  }
}
