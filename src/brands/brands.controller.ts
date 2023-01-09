import { Body, Controller, Get, Post, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { BrandAddonsDto } from './dto/addons.dto';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService){}

  @Post('/:brandId/addons/')
  async newMealAddon(
    @Body() brandsAddonsDto: BrandAddonsDto,
    @Param('brandId') brandId: string,
  ): Promise<any> {
    const { name, description, price, category } = brandsAddonsDto;
    
    // if(price < 1000) {
    //   throw new HttpException({
    //     statusCode: HttpStatus.BAD_REQUEST,
    //     message: 'Get out',
    //     error: 'Price too low'
    //   }, HttpStatus.BAD_REQUEST)
    // }
    // const newName = this.brandsService.getName()
    // const newPrice = this.brandsService.getPrice()
    const rest = this.brandsService.newMealAddon(name, description, price, category)
    return rest;
  }
}
