import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import { PAYMENT_CONTROLLER, PAYMENT_ROUTES } from '../data';

@Controller(PAYMENT_CONTROLLER)
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}


  ///Str
  @Post(PAYMENT_ROUTES.CREATE_INTENT)
  async createIntentStripe(@Body('amount') amount: number) {
    return this.paymentService.createIntentStripe(amount);
  }
}
