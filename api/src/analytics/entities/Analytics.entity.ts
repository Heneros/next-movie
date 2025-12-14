import { ApiProperty } from '@nestjs/swagger';

export class MonthlyViewEntity {
  @ApiProperty({ example: 2025 })
  year: number;

  @ApiProperty({ example: 11 })
  month: number;

  @ApiProperty({ example: 'November 2025' })
  monthName: string;

  @ApiProperty({ example: 6 })
  views: number;
}

export class PeakOrMinimumEntity {
  @ApiProperty({ example: 6 })
  views: number;

  @ApiProperty({ type: MonthlyViewEntity })
  month: MonthlyViewEntity;
}

export class MonthlyStatsEntity {
  @ApiProperty({ type: [MonthlyViewEntity] })
  data: MonthlyViewEntity[];

  @ApiProperty({ type: PeakOrMinimumEntity })
  peak: PeakOrMinimumEntity;

  @ApiProperty({ type: PeakOrMinimumEntity })
  minimum: PeakOrMinimumEntity;

  @ApiProperty({ example: 6 })
  total: number;
}
