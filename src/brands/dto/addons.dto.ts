import { IsString, IsNumber, IsOptional } from 'class-validator'

export class BrandAddonsDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    category: string;
}