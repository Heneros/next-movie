import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import { PAYMENT_CONTROLLER, PAYMENT_ROUTES } from '../data';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateIntentDto } from './dto/CreateIntent.dto';
import { CreateIntentCommand } from './commands';
import { User } from '@/decorators/user.decorator';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import type { User as UseType } from '../interfaces';

@Controller(PAYMENT_CONTROLLER)
export class PaymentsController {
  constructor(
    private readonly paymentService: PaymentsService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  ///Stripe Payment Intent
  @UseGuards(JwtAuthGuard)
  @Post(PAYMENT_ROUTES.CREATE_INTENT)
  async createIntentStripe(
    @User() user: UseType,
    @Body() createIntentDto: CreateIntentDto,
  ) {
    const res = await this.commandBus.execute(
      new CreateIntentCommand(user.id, createIntentDto),
    );
    return res;
  }
}
