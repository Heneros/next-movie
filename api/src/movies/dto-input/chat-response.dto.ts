import { ApiProperty } from '@nestjs/swagger';

export class ChatResponseDto {
  @ApiProperty({
    description: 'Assistant reply text',
    example: 'The capital of France is Paris.',
  })
  text: string;
}
