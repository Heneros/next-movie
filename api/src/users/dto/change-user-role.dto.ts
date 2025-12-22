import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty } from 'class-validator';

export enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  User = 'USER',
}

registerEnumType(UserRole, {
  name: 'roles',
  description: 'Roles available for users',
});

@InputType()
export class ChangeUserRole {
  @ApiProperty({
    example: ['ADMIN'],
    description: 'User role',
    isArray: true,
  })
  //   @IsString()
  @Field(() => [UserRole], { nullable: false })
  // @IsArray()
  // @ArrayMinSize(1)
  @IsEnum(UserRole, { each: true })
  @IsNotEmpty()
  role: string;
}
