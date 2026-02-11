import { ICommand } from '@nestjs/cqrs';
import { CreateCollectionDto } from '../dto-input/CreateCollection.dto';

export class CreateCollectionCommand implements ICommand {
  constructor(public readonly createCollectionDto: CreateCollectionDto) {}
}
