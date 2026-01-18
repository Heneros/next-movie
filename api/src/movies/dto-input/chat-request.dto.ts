import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MessageDto } from './ai-message.dto';

export class ChatRequestDto {
  @ApiProperty({
    type: [MessageDto],
    description: 'Array of chat messages (conversation history)',
    example: [{ role: 'user', content: 'What is the capital of France?' }],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => MessageDto)
  messages: MessageDto[];

  @ApiProperty({
    required: false,
    description: 'Optional model id to use (HuggingFace model or local model)',
    example: 'google/flan-t5-small',
  })
  @IsOptional()
  @IsString()
  model?: string;
}
