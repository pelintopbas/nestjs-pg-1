import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/cities/entities/city.entity';
import { CityRepository } from './cities.repository';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CitiesController],
  providers: [CitiesService, CityRepository],
  exports: [CitiesService, CityRepository]
})
export class CitiesModule { }