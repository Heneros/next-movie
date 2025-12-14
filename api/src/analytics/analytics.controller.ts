import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ANALYTICS_CONTROLLER, ANALYTICS_ROUTES } from '../data';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { QueryStatsDto } from './dto/query-stats.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetMonthlyStatsQuery } from './query/getStatsByMonth.query';
import { IncrementViewCommand } from './commands';
import { CheckUserExistPipe } from '@/pipe/CheckUserExistPipe.pipe';
import { GetTotalStatsQuery } from './query';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { MonthlyStatsEntity } from './entities/Analytics.entity';
import { ProfileVisitEntity } from './entities/ProfileVisitEntity.entitty';

@Controller(ANALYTICS_CONTROLLER)
@ApiTags('Analytics')
export class AnalyticsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  // @Post(ANALYTICS_ROUTES.INCREMENT_VIEW)
  // @ApiOperation({ summary: 'Watch Profile user' })
  // @ApiCreatedResponse({
  //   description: 'profile views increased',
  // })
  // async incrementView(
  //   @Param('userId', CheckUserExistPipe, ParseIntPipe) userId: number,
  // ) {
  //   const result = await this.commandBus.execute(
  //     new IncrementViewCommand(userId),
  //   );
  //   return plainToInstance(ProfileVisitEntity, result);
  // }

  @Get(ANALYTICS_ROUTES.GET_MONTHLY)
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Profile user views' })
  @ApiCreatedResponse({
    description: 'Profile views ',
  })
  async getStatsByMonth(
    @Param('userId', CheckUserExistPipe, ParseIntPipe) userId: number,
    // @Query() query: QueryStatsDto,
  ) {
    const stats = await this.queryBus.execute(new GetMonthlyStatsQuery(userId));
    return stats;
    // return plainToInstance(MonthlyStatsEntity, stats);
  }

  @Get(ANALYTICS_ROUTES.GET_TOTAL)
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get Total stats from profile' })
  async getStatsTotal(
    @Param('userId', CheckUserExistPipe, ParseIntPipe) userId: number,
  ) {
    const stats = await this.queryBus.execute(new GetTotalStatsQuery(userId));
    return stats;
  }
}
