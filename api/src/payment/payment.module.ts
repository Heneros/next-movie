import { Module } from '@nestjs/common'
import Stripe from 'stripe'

@Module({
  providers: [
    {
      provide: 'STRIPE',
      useFactory: () => {
        return new Stripe(process.env.STRIPE_SECRET_KEY!, {
          apiVersion: '2025-08-27.basil',
        })
      },
    },
  ],
  exports: ['STRIPE'],
})
export class PaymentModule {}