import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Field, ID, InputType } from '@nestjs/graphql';
import { RegisterUserDto } from '@/auth/dto/create-user.dto';

import {
    ArrayMinSize,
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

export enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    User = 'User',
}

@InputType()
export class UpdateUserDto extends PartialType(RegisterUserDto) {

 
}
