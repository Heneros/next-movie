import { ICommand } from '@nestjs/cqrs';

export class DeleteCollectionCommand implements ICommand {
  constructor(public readonly collectionId: number) {}
}
