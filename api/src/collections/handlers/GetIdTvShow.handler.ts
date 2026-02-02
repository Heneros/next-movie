// import {
//   CommandHandler,
//   ICommandHandler,
//   IQueryHandler,
//   QueryHandler,
// } from '@nestjs/cqrs';
// import { CreateTvShowCommand } from '../commands';
// import { TvShowRepository } from '../repositories/Collections.repository';
// import { GetIdTvShowQuery } from '../queries';
// import { RedisService } from '@/redis/redis.service';
// import { PAGINATION_LIMIT } from '@/data/defaultVariables';
// import { BadRequestException, NotFoundException } from '@nestjs/common';
// import { CACHE_TTL } from '@/data/ttl';

// @QueryHandler(GetIdTvShowQuery)
// export class GetIdTvShowHandler implements IQueryHandler<GetIdTvShowQuery> {
//   constructor(
//     private readonly redisService: RedisService,
//     private readonly tvShowRepository: TvShowRepository,
//   ) {}

//   async execute(query: GetIdTvShowQuery) {
//     const { tvShowId } = query;

//     try {
//       const tvShowKey = `tvShow:id:${tvShowId}`;
//       const tvShowCached = await this.redisService.getId(tvShowKey);
//       if (tvShowCached) {
//         return JSON.parse(tvShowCached);
//       }

//       const tvShowIdResult = await this.tvShowRepository.findUnique({
//         id: tvShowId,
//       });
//       if (!tvShowIdResult) {
//         throw new NotFoundException(`Tv Show don\'t exist', ${tvShowIdResult}`);
//       }

//       await this.redisService.saveDataItem(String(tvShowId), tvShowIdResult);
//       return tvShowIdResult;
//     } catch (error) {
//       console.error(error);
//       if (error instanceof NotFoundException) {
//         throw error;
//       }
//       throw new BadRequestException('Invalid data format', { cause: error });
//     }
//   }
// }
