import { IQuery } from '@nestjs/cqrs';
import type { Request } from 'express';

export class GetProfileQuery implements IQuery {
  constructor(public userId: number,






    public request: Request
  ) {}


}
