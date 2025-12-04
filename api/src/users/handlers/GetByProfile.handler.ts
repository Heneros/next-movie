import { IQuery, QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetProfileQuery } from '../queries/GetProfile.query';
import { UsersRepository } from '@/users/repository/Users.repository';
import { RedisPrefixEnum } from '@/data/redisPrefixEnum';
import { RedisRepository } from '@/redis/redis.repository';
import { NotFoundException } from '@nestjs/common';
import { CACHE_TTL } from '@/data/ttl';
import { VisitTrackerService } from '../services/visit-tracker.service';
import { Request } from 'express';

@QueryHandler(GetProfileQuery)
export class GetByProfileHandler implements IQueryHandler<GetProfileQuery> {
  constructor(
    private redisRepository: RedisRepository,
    private usersRepository: UsersRepository,
        private visitTracker: VisitTrackerService,
  ) {}

  async execute(query: GetProfileQuery) {
    const { userId, request } = query;

    const clientIp = this.getClientIp(request)

    
    const cached = await this.redisRepository.getWithVersion(
      RedisPrefixEnum.USERS_ID,
      String(userId),
    );
 //   await this.usersRepository.updateViews(userId);
    if (cached) {
           await this.trackVisitIfUnique(userId, clientIp);
      //   await this.usersRepository.updateViews(userId, 1);
      return cached;
    }

    const profileUser = await this.usersRepository.findById(userId);

    if (!profileUser) {
      throw new NotFoundException('No user found');
    }
        await this.trackVisitIfUnique(userId, clientIp);


    await this.redisRepository.setWithVersion(
      RedisPrefixEnum.USERS_ID,
      String(userId),
      JSON.stringify(profileUser),
      CACHE_TTL.TEN_SECONDS,
    );

    return profileUser;
  }

  private getClientIp(request:Request):string{
    const forwarded = request.headers['x-forwarded-for']
   if (forwarded && typeof forwarded === 'string') {
    return forwarded.split(",")[0].trim()
  }
    return request.ip || request.socket.remoteAddress || 'unknown';

  }

  private async trackVisitIfUnique(userId:number, ip:string): Promise<void>{
    try {
      if(await this.visitTracker.isUniqueVisit(userId, ip)){
        await this.usersRepository.updateViews(userId)
        await this.visitTracker.registerVisit(userId, ip)
      }
    } catch (error) {
            console.error('Error tracking visit:', error);
    }
  }
}
 
