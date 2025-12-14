import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions } from 'passport-github2';
import { AuthRepository } from '../repositories/Auth.repository';
import { HandleIOAuth } from '../services/HandleIOAuth.service';
import axios from 'axios';
import { MailService } from '@/mail/mail.service';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    private config: ConfigService,
    private readonly handleIOauth: HandleIOAuth,
    private readonly authRepository: AuthRepository,

    private readonly mailService: MailService,
  ) {
    const clientID = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const callbackURL = process.env.GITHUB_CALLBACK_URL;

    if (!clientID || !clientSecret) {
      throw new Error(
        'GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be defined',
      );
    }
    const options: StrategyOptions = {
      clientID,
      clientSecret,
      callbackURL: callbackURL!,
    };

    super(options);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    try {
      if (!profile) {
        throw new InternalServerErrorException('Profile is undefined');
      }

      const { displayName, emails, photos, id } = profile;

      const sanitizePart = (s?: string) =>
        String(s || '')
          .replace(/\s+/g, '')
          .replace(/[^\w\-\.]/g, '')
          .toLowerCase();

      let emailValue: string | null = null;
      if (
        emails &&
        Array.isArray(emails) &&
        emails.length &&
        emails[0]?.value
      ) {
        emailValue = String(emails[0].value).trim().toLowerCase();
      }

      if (!emailValue) {
        const namePart = displayName || profile.username || `user${id}`;
        const safe = sanitizePart(namePart);
        emailValue = `${safe}@noemail.github`;
      }

      const user = await this.authRepository.findByEmail(emailValue);
      if (user?.blocked) {
        throw new BadRequestException('User is blocked');
      }
      if (user) {
        return user;
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(String(id), salt);

      const username = displayName
        ? sanitizePart(displayName)
        : emailValue.split('@')[0];

      const userData = {
        userId: id,
        providerId: String(id),
        email: emailValue,
        username,
        provider: profile.provider || 'github',
        password: hashedPassword,
        avatarUrl: photos?.[0]?.value || profile._json?.picture || null,
      };

      const newUser = await this.handleIOauth.createUserViaOauth(userData);

      await this.mailService.welcomeEmail(
        'Your email is verified!',
        './welcome',
        newUser,
      );

      return {
        id: newUser.id,
        email: emailValue,
        username: newUser.username || username,
        avatar: userData.avatarUrl,
        githubId: id,
      };
    } catch (err) {
      console.error(
        'Github Strategy Validate Error',
        (err as any).message || err,
      );
      throw new InternalServerErrorException('Authentication failed');
    }
  }
}
