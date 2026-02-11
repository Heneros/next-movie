import { ICommand } from '@nestjs/cqrs';
import { UpdateCollectionDto } from '../dto-input/UpdateTvShow.dto';

export class UpdateCollectionCommand implements ICommand {
  constructor(
    public readonly collectionId: number,
    public readonly collectionUpdateDto: UpdateCollectionDto,
  ) {}
}
