import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import knex from 'knex';

@Injectable()
export class BrandsService {

     async newMealAddon(name: string, description: string, price: number, category: string){
             const createBrands = await knex('brands').insert([
                 name, description, price, category 
                ]);
    return createBrands;
 }
    getName(){
        return 'testing..!'
    }
    
}
