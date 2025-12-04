import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto'

@Injectable()
export class VisitTrackerService {
  constructor(private prisma: PrismaService) {}

  private hashIp(ip:string):string{
    return crypto.createHash('sha256').update(ip).digest('hex')
  }

  
  async isUniqueVisit(userId:number, ip: string):Promise<boolean>{
    const ipHash = this.hashIp(ip)
    const yesterday = new Date();

    yesterday.setDate(yesterday.getDate() - 1);

    const existingVisit = await this.prisma.profileVisit.findFirst({
      where:{
        userId, 
        ipHash,
        visitDate:{
          gte:yesterday
        }
      }
    });

    return !existingVisit;
  }
    async registerVisit(userId: number, ip: string): Promise<void> {
      const ipHash = this.hashIp(ip)

      await this.prisma.profileVisit.create({
        data:{
          userId, 
          ipHash, 
          visitDate: new Date()
        }
      })
    }
}
