import { MovieEntity } from '@/movies/entities/movie.entity';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

enum UserRole {
  USER = 'USER',
  EDITOR = 'EDITOR',
  ADMIN = 'ADMIN',
}

@ObjectType({ description: 'User' })
export class UserEntity implements User {
  @ApiProperty()
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: true })
  profileViews: number;

  @ApiProperty()
  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @ApiProperty()
  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @ApiProperty({ description: 'Name of user' })
  @Field(() => String, { nullable: true })
  username: string;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  email: string;

  @ApiProperty()
  @Field((type) => [String], { nullable: false })
  @Exclude()
  refreshToken: string[];

  @ApiProperty()
  @Field(() => Boolean, { nullable: false })
  isEmailVerified: boolean;

  @ApiProperty()
  @Field(() => Boolean, { nullable: false })
  blocked: boolean;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  avatar: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  preview: string;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  googleId: string;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  githubId: string;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  discordId: string;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  providerId: string | null;

  @ApiProperty()
  @Field((type) => [String], { nullable: true })
  role: UserRole;

  @ApiProperty()
  @Field(() => Int, { nullable: false })
  avatarId: number;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  provider: string;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  payment: string;

  @Exclude()
  password: string;

  @Field(() => [MovieEntity], { nullable: true })
  movies?: MovieEntity[];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
