import { IQuery } from '@nestjs/cqrs';

export class GetIdReviewQuery implements IQuery {
  constructor(public readonly id: number) {}
}
