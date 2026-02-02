import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  constructor(@Inject('STRIPE') private readonly stripe: Stripe) {}

  async createIntentStripe(amount: number) {
    return this.stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });
  }
}
