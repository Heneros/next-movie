import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepository } from '../repositories/Auth.repository';
import { VerifyResetTokenRepository } from '../repositories/VerifyResetToken.repository';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { User } from '@prisma/client';
import { folderCloud, tempRegisterDate } from '@/data/defaultVariables';
import { OAuthUserData } from '@/interfaces/oauth-user.interface';

@Injectable()
export class HandleIOAuth {
  constructor(
    protected authRepository: AuthRepository,
    // protected userRepository: UserRepository,
    protected verifyResetTokenRepository: VerifyResetTokenRepository,
    protected JwtService: JwtService,

    protected cloudinaryService: CloudinaryService,
  ) {}

  protected async handleOauthLogin(profile): Promise<User> {
    let user = await this.authRepository.findByEmail(profile.email);

    if (!user) {
      throw new NotFoundException('No user found');
    }

    const payload = {
      id: user.id,
      username: user.username,
      roles: user.role,
    };
    const accessTokenJwt = await this.JwtService.signAsync(payload, {
      expiresIn: '7d',
    });
    const refreshTokenJwt = await this.JwtService.signAsync(payload, {
      expiresIn: '31d',
    });

    const token = await this.verifyResetTokenRepository.findUnique({
      userId: user.id,
    });

    if (!token) {
      await this.verifyResetTokenRepository.createToken({
        userId: user.id,
        token: refreshTokenJwt,
        tempDate: new Date(Date.now() + tempRegisterDate),
      });
      return user;
    } else {
      await this.verifyResetTokenRepository.deleteToken(user.id);
      await this.verifyResetTokenRepository.createToken({
        userId: user.id,
        token: refreshTokenJwt,
        tempDate: new Date(Date.now() + tempRegisterDate),
      });
    }

    await this.authRepository.updateProfile(user.id, {
      refreshToken: [accessTokenJwt],
    });
    return user;
  }

  async uploadAvatarToCloudinary(avatarUrl: string, id: string) {
    if (!avatarUrl) return null;
    const publicId = `${folderCloud}/avatars/${id}_${Date.now()}`;
    return await this.cloudinaryService.uploadFromUrl(avatarUrl, publicId);
  }

  async createUserViaOauth(userData: OAuthUserData) {
    const { email, username, provider, avatarUrl, providerId, password } =
      userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const providerField = {
      [`${provider}Id`]: providerId,
    };

    const avatarPublicId = `${folderCloud}/avatars/${providerId}_${Date.now()}`;
    let cloudinaryAvatar;

    if (avatarUrl) {
      cloudinaryAvatar = await this.cloudinaryService.uploadFromUrl(
        avatarUrl,
        avatarPublicId,
      );
    }

    return this.authRepository.create({
      email,
      username,
      isEmailVerified: true,
      password: hashedPassword,
      provider,
      ...providerField,
      avatar: cloudinaryAvatar
        ? {
            create: {
              url: cloudinaryAvatar.url,
              publicId: cloudinaryAvatar.publicId,
            },
          }
        : undefined,
    });
  }
}
