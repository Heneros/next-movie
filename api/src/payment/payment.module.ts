import { Module } from '@nestjs/common'
import Stripe from 'stripe'

@Module({
  providers: [
    {
      provide: 'STRIPE',
      useFactory: () => {
        return new Stripe(process.env.STRIPE_SECRET_KEY!, {
          apiVersion: '2023-10-16',
        })
      },
    },
  ],
  exports: ['STRIPE'],
})
export class StripeModule {}