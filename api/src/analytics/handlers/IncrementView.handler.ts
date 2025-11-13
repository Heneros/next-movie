import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IncrementViewCommand } from '../commands';
import { AnalyticsRepository } from '../repositories/analytics.repository';

@CommandHandler(IncrementViewCommand)
export class IncrementViewHandler
  implements ICommandHandler<IncrementViewCommand>
{
  constructor(private analyticsRepository: AnalyticsRepository) {}

  async execute(command: IncrementViewCommand) {
    const { userId } = command;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    const stats = await this.analyticsRepository.increaseStat(
      userId,
      year,
      month,
    );

    return stats;
  }
}
