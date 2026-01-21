import { IQuery } from '@nestjs/cqrs';

export class GetIdTvShowQuery implements IQuery {
  constructor(public  tvShowId: number) {}
}
