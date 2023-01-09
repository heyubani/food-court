import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';

@Global()
@Module({
  imports: [BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
