import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityRepository } from './cities.repository';
import { City } from './entities/city.entity';



@Injectable()
export class CitiesService {

  constructor(

    private readonly citiesRepository: CityRepository

  ) { }

  async create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.citiesRepository.create(createCityDto);

    return await this.citiesRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return await this.citiesRepository.find();
  }

  async findOne(id: number): Promise<City> {
    const city = await this.citiesRepository.findOne({ where: { id } });
    if (!city) {
      throw new NotFoundException(`City with id ${id} not found`);
    }
    return city;
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);
    Object.assign(city, updateCityDto);
    return await this.citiesRepository.save(city);
  }

  async remove(id: number): Promise<City> {
    const city = await this.findOne(id);
    return await this.citiesRepository.remove(city);
  }
}
