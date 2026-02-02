import { Injectable } from '@nestjs/common';
import { PrismaClient, Payment } from '@prisma/client';
import { AbstractRepositoryPrisma } from '@/prisma/abstract.repository';
import { PrismaService } from '@/prisma/prisma.service';


@Injectable()
export class PaymentRepository extends AbstractRepositoryPrisma<Payment> {
  protected readonly prisma: PrismaClient;
  protected readonly model: any;

  public readonly paymentModel;

  constructor(private readonly prismaService: PrismaService) {
    super();
    this.prisma = prismaService;
    this.model = this.prisma.payment;
    this.paymentModel = this.prismaService.payment;
  }

}
