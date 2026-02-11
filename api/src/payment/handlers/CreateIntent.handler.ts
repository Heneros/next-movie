import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateIntentCommand } from '../commands';
import { PaymentRepository } from '../repositories/Payment.repository';
import Stripe from 'stripe';
import { Inject } from '@nestjs/common';
import uuid from 'uuid';

@CommandHandler(CreateIntentCommand)
export class CreateIntentHandler implements ICommandHandler<CreateIntentCommand> {
  constructor(
    private readonly paymentRepository: PaymentRepository,
    @Inject('STRIPE') private readonly stripe: Stripe,
  ) {}

  async execute(command: CreateIntentCommand) {
    const { userId, createIntentDto } = command;

    const resIntent = await this.stripe.paymentIntents.create({
      amount: createIntentDto.amount,
      currency: createIntentDto.currency,
      automatic_payment_methods: { enabled: true },
    });

    let res;
    if (createIntentDto.movieId) {
      res = await this.paymentRepository.create({
        // userId: userId,
        status: 'PENDING',
        amount: createIntentDto.amount,
        currency: createIntentDto.currency.toUpperCase(),
        providerPaymentId: resIntent.id,
        movieId: createIntentDto.movieId,
        // providerPaymentId: uuid.v4(),
        provider: createIntentDto.provider.toUpperCase(),
        user: {
          connect: { id: userId },
        },
      });
    }
    res = await this.paymentRepository.create({
      // userId: userId,
      status: 'PENDING',
      amount: createIntentDto.amount,
      currency: createIntentDto.currency.toUpperCase(),
      providerPaymentId: resIntent.id,
      tvShowId: createIntentDto.tvShowId,
      // providerPaymentId: uuid.v4(),
      provider: createIntentDto.provider.toUpperCase(),
      user: {
        connect: { id: userId },
      },
    });

    return res;
  }
}
