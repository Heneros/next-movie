import { ICommand } from '@nestjs/cqrs';
import type { CustomRequest } from '@/interfaces';
import type { Response } from 'express';

export class LogoutCommand implements ICommand {
  constructor(
    public readonly req: CustomRequest,
    public readonly res: Response,
  ) {}
}
