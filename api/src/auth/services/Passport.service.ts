import { BadRequestException, Injectable } from '@nestjs/common';
import { HandleIOAuth } from './HandleIOAuth.service';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import { JwtService } from '@nestjs/jwt';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';

@Injectable()
export class PassportService extends HandleIOAuth {
  constructor(
    // protected readonly userRepository: UserRepository,
    protected readonly authRepository: AuthRepository,
    protected readonly verifyResetTokenRepository: VerifyResetTokenRepository,

    protected readonly jwtService: JwtService,
    protected readonly cloudinaryService: CloudinaryService,
  ) {
    super(
      authRepository,
      //   userRepository,
      verifyResetTokenRepository,
      jwtService,
      cloudinaryService,
    );
  }

  async validateUser(profile: any) {
    try {
      return await this.handleOauthLogin(profile);
    } catch (err: any) {
      throw new BadRequestException(
        'Something wrong happened with passport',
        err,
      );
    }
  }
}
