import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateReviewCommand } from '../commands';

@CommandHandler(CreateReviewCommand)
export class CreateReviewHandler
  implements ICommandHandler<CreateReviewCommand>
{
  constructor() {}

  async execute(command: CreateReviewCommand): Promise<any> {}
}
