import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  BadGatewayException,
  Res,
  Req,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  EmailDto,
  LoginUserDto,
  RegisterUserDto,
  ResetPasswordDto,
} from './dto';
import { AUTH_CONTROLLER, AUTH_ROUTES, isDevelopment } from '../data';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthEntity } from './entities/auth.entity';
import {
  AuthMeQuery,
  LoginUserCommand,
  LogoutCommand,
  RegisterUserCommand,
  ResendEmailCommand,
  ResetPasswordCommand,
} from './commands';
import type { Response } from 'express';
import type { CustomRequest } from '../interfaces';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EmailValidationPipe } from '../pipe/EmailValidation.pipe';
import { ResetPasswordRequestCommand } from './commands/RequestResetPassword.command';
import { VerifyUserQuery } from './query';
import { AuthGuard } from '@nestjs/passport';
import { PassportService } from './services/Passport.service';

@Controller(AUTH_CONTROLLER)
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly jwt: JwtService,
    private readonly passportService: PassportService,
  ) {}

  @Post(AUTH_ROUTES.REGISTER)
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({
    description:
      'The user has been successfully created. Check out your email to verify account',
    type: AuthEntity,
  })
  async create(@Body() createUserDto: RegisterUserDto) {
    return await this.commandBus.execute(
      new RegisterUserCommand(createUserDto),
    );
  }

  // @Throttle({ default: { limit: 15, ttl: 60000 } })
  @Post(AUTH_ROUTES.LOGIN)
  @ApiResponse({
    status: 200,
    description: 'Log in successfully',
  })
  @ApiOperation({ summary: 'Log in' })
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const result = await this.commandBus.execute(
        new LoginUserCommand(loginUserDto),
      );

      res.cookie('jwtMovies', result.refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        maxAge: 31 * 24 * 60 * 60 * 1000,
        secure: true,
        path: '/',
      });

      return new AuthEntity({
        message: 'Login successful',
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        username: result.user.username,
        id: result.user.id,
        email: result.user.email,
        role: result.user.role,
        imageUrl: result.user.imageUrl,
      });
    } catch (err) {
      if (err instanceof BadRequestException) {
        throw err;
      }
      throw new BadGatewayException(err || 'Login failed');
    }
  }

  @Post(AUTH_ROUTES.RESET_PASSWORD_REQUEST)
  @ApiOperation({
    summary: 'Request for users who wants receive in email to change password',
  })
  @ApiCreatedResponse({
    description: 'On email was sent request to reset password',
    type: AuthEntity,
  })
  @ApiOkResponse({ type: AuthEntity })
  async requestResetPassword(@Body(EmailValidationPipe) emailDto: EmailDto) {
    // console.log(emailDto);
    return await this.commandBus.execute(
      new ResetPasswordRequestCommand(emailDto.email),
    );
  }

  @Post(AUTH_ROUTES.RESET_PASSWORD)
  @ApiOperation({
    summary: 'For users, who receive link in email. And know user id.',
  })
  @ApiCreatedResponse({
    description: 'Password was successfully reset!',
    type: AuthEntity,
  })
  @ApiOkResponse({ type: AuthEntity })
  @ApiBody({
    type: ResetPasswordDto,
    description: 'Actions specify new password and user id',
  })
  async resetPassword(
    @Query('userId', ParseIntPipe) userId: number,
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return await this.commandBus.execute(
      new ResetPasswordCommand(userId, resetPasswordDto),
    );
  }
  @Post(AUTH_ROUTES.LOGOUT)
  @ApiResponse({
    status: 302,
    description: 'Log out successfully',
  })
  @ApiOperation({
    summary: 'Log out for application. Delete cookie and session ',
  })
  async logout(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      await this.commandBus.execute(new LogoutCommand(req, res));

      return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error(error);
    }
  }
  @Get(AUTH_ROUTES.VERIFY)
  @ApiOperation({ summary: 'Verify email. Enter id user and token' })
  @ApiCreatedResponse({
    description: 'The user has been successfully verified email.',
    type: AuthEntity,
  })
  @ApiNotFoundResponse({
    description: 'Invalid or expired token.',
  })
  async verifyEmail(
    @Param('emailToken') token: string,
    @Param('userId') userId: number,
  ) {
    return await this.queryBus.execute(new VerifyUserQuery(token, userId));
  }

  @Post(AUTH_ROUTES.RESEND_EMAIL)
  @ApiOperation({ summary: 'Action to resend email to receive token' })
  @ApiCreatedResponse({
    description: 'Email was successfully sent to user.',
    type: AuthEntity,
  })
  @ApiOkResponse({ type: AuthEntity })
  async resendEmailValidation(
    @Body()
    emailDto: EmailDto,
  ) {
    const result = await this.commandBus.execute(
      new ResendEmailCommand(emailDto.email),
    );
    return new AuthEntity(result);
  }

  @Get(AUTH_ROUTES.AUTH_ME)
  async authMe(
    @Req() req: CustomRequest,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.queryBus.execute(new AuthMeQuery(req, res));
    return result;
  }

  @Get(AUTH_ROUTES.GOOGLE_CALLBACK)
  @ApiOperation({ summary: 'Callback from Google OAuth' })
  @ApiResponse({
    status: 302,
    description: 'Sets cookie and redirects to frontend',
  })
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const user = await this.passportService.validateUser(req.user);

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const token = this.jwt.sign({
        userId: user.id,
        username: user.username,
        role: user.role,
      });

      return res
        .cookie('jwtMovies', token, {
          httpOnly: true,
          sameSite: !isDevelopment ? 'lax' : 'strict',
          maxAge: 31 * 24 * 60 * 60 * 1000,
          secure: !isDevelopment,
        })
        .redirect('/');
    } catch (error: any) {
      console.error('Google Auth Error:', error);
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadGatewayException(error.message || 'Authentication failed');
    }
  }

  @Get(AUTH_ROUTES.GITHUB_CALLBACK)
  @UseGuards(AuthGuard('github'))
  @ApiOperation({ summary: 'Callback from Github OAuth' })
  @ApiResponse({
    status: 302,
    description: 'Sets cookie and redirects to frontend',
  })
  async githubAuthCallback(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      // console.log(req.user);
      const user = await this.passportService.validateUser(req.user);

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const token = this.jwt.sign({
        userId: user.id,
        username: user.username,
        role: user.role,
      });

      return res
        .cookie('jwtMovies', token, {
          httpOnly: true,
          sameSite: !isDevelopment ? 'lax' : 'strict',
          maxAge: 31 * 24 * 60 * 60 * 1000,
          secure: !isDevelopment,
        })
        .redirect('/');
    } catch (error: any) {
      console.error('Google Auth Error:', error);
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadGatewayException(error.message || 'Authentication failed');
    }
  }
}
