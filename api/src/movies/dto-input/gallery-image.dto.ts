import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGalleryImageDto {
    @IsString()
    url: string
  @IsString()
  publicId: string;

  @IsOptional()
  @IsString()
  altText?: string;

  @IsOptional()
  @IsNumber()
  order?: number;
}

