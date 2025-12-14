import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class MessageDto {
  @ApiProperty({
    example: 'user',
    description: "Role of the message author ('user' | 'assistant' | 'system')",
  })
  @IsString()
  @IsIn(['user', 'assistant', 'system'])
  role: string;

  @ApiProperty({
    example: 'What is the capital of France?',
    description: 'Text content of the message',
  })
  @IsString()
  content: string;
}
