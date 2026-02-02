import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';



export enum  Currency {
               USD = 'usd',
               POL = 'pol',
}
export enum  PaymentMethod {
               STRIPE = 'stripe',
               PAYPAL = 'paypal',
}



export class CreateIntentDto {
  @IsNumber()
  @Type(() => Number)
  amount: number;



  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  movieId?: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  tvShowId?: number;


    @IsString()
    @IsEnum(Currency, { each: true })
  @IsNotEmpty()
  currency: string;


    @IsString()
    @IsEnum(PaymentMethod, { each: true })
  @IsNotEmpty()
  provider: string;




}
