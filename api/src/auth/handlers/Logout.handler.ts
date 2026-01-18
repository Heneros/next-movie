import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { AuthRepository } from '../repositories/Auth.repository';

import { LogoutCommand } from '../commands';

@CommandHandler(LogoutCommand)
export class LogoutHandler implements ICommandHandler<LogoutCommand> {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(command: LogoutCommand) {
    const { req, res } = command;

    if (!req.session) {
      return res.status(404).json({ message: 'Not found session' });
    }

    await new Promise<void>((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          reject(new Error('Failed to destroy session'));
        } else {
          resolve();
        }
      });
    });

    res.clearCookie('jwtMovies');
    res.clearCookie('connect.sid');

    return 'Logged out successfully';
  }
}
