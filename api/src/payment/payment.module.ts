import { Module } from '@nestjs/common';
import Stripe from 'stripe';
import { PaymentsController } from './payment.controller';
import { PaymentsService } from './payment.service';
import { PaymentRepository } from './repositories/Payment.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [
    {
      provide: 'STRIPE',
      useFactory: () => {
        return new Stripe(process.env.STRIPE_SECRET_KEY!, {
          apiVersion: '2025-08-27.basil',
        });
      },
    },
    PaymentsService, 
    PaymentRepository,
    PrismaService
  ],
  controllers: [PaymentsController],
  exports: ['STRIPE'],
})
export class PaymentModule {}
