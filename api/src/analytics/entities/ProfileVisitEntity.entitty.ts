import { ApiProperty } from '@nestjs/swagger';

export class ProfileVisitEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 2 })
  userId: number;

  @ApiProperty({ example: null, nullable: true })
  visitorId?: number | null;

  @ApiProperty({ example: null, nullable: true })
  ip?: string | null;

  @ApiProperty({ example: 2025 })
  year: number;

  @ApiProperty({ example: 11 })
  month: number;

  @ApiProperty({ example: 7 })
  viewCount: number;

  @ApiProperty({ example: '2025-11-04T12:46:57.464Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-11-06T14:51:16.032Z' })
  updatedAt: Date;

  constructor(partial: Partial<ProfileVisitEntity>) {
    Object.assign(this, partial);
  }
}
