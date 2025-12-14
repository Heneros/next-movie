import { Controller, Get } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from '../prisma/prisma.service';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private prismaHealth: PrismaHealthIndicator,
    private prisma: PrismaService,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  checkAll() {
    return this.health.check([
      () => this.http.pingCheck('self', 'http://localhost:3000'),
      () => this.http.pingCheck('frontend', 'http://localhost:3001'),
      async () => this.prismaHealth.pingCheck('prisma', this.prisma),

      async () => this.memory.checkHeap('memory_heap', 300 * 1024 * 1024),
      async () => this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),

      async () =>
        this.disk.checkStorage('disk', {
          path: 'C:\\',
          thresholdPercent: 0.8,
        }),
    ]);
  }
}
