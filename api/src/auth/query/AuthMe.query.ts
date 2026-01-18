import { ICommand, IQuery } from '@nestjs/cqrs';
import type { CustomRequest } from '@/interfaces';
import type { Response } from 'express';

export class AuthMeQuery implements IQuery {
  constructor(
    public readonly req: CustomRequest,
    public readonly res: Response,
  ) {}
}
