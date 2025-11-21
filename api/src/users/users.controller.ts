import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { USERS_CONTROLLER, USERS_ROUTES } from '../data';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from './entity/User.entity';
import { GetAllUsersQuery } from './queries/GetAllUsers.query';
import { Role } from '@/decorators/role.decorator';
// import { RolesGuard } from '@/guards/roles.guard';
import {
  ApiBearerAuth,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { ProfileOwnerGuard } from '@/guards/profile-owner.guard';
import { CheckUserExistPipe } from 'src/pipe/CheckUserExistPipe.pipe';
// import { UpdateUserDto } from './dto/update-profile';
import { UpdateProfileCommand } from './commands/UpdateProfile.command';
import { UserInterceptor } from 'src/interceptors/User.interceptor';
import { GetProfileQuery } from './queries/GetProfile.query';
import { UpdateUserRole } from './dto/update-user-role.dto';

@Controller(USERS_CONTROLLER)
export class UsersController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @UseInterceptors(UserInterceptor)
  @Get(USERS_ROUTES.GET_ALL)
  @UseGuards(JwtAuthGuard)
  @Role('ADMIN')
  @ApiCookieAuth('cookie-auth')
  @ApiOperation({ summary: 'For admin. Get All User' })
  @ApiOkResponse({ type: UserEntity, isArray: true })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  async getAllUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    const newUsers = await this.queryBus.execute(new GetAllUsersQuery(page));
    return plainToInstance(UserEntity, newUsers);
  }

  @Patch(USERS_ROUTES.UPDATE_USER)
  @UseGuards(JwtAuthGuard, ProfileOwnerGuard)
  @ApiOperation({ summary: 'Update my profile. Only for authorized user' })
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({ type: UserEntity })
  async update(
    @Param('userId', CheckUserExistPipe) userId: number,
    @Body() updateUserDto: UpdateUserRole,
  ) {
    const result = await this.commandBus.execute(
      new UpdateProfileCommand(userId, updateUserDto),
    );

    return plainToInstance(UserEntity, result);
  }

  @Get(USERS_ROUTES.GET_ID_USER)
  // @UseGuards(JwtAuthGuard, ProfileOwnerGuard)
  @ApiOperation({ summary: 'Get my profile.' })
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({ type: UserEntity })
  async getProfile(@Param('userId', CheckUserExistPipe) userId: number) {
    const result = await this.queryBus.execute(new GetProfileQuery(userId));
    return plainToInstance(UserEntity, result);
  }
}
