import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityRepository {
    constructor(
        @InjectRepository(City)
        private readonly repository: Repository<City>,
    ) { }

    create(cityData: Partial<City>) {
        return this.repository.create(cityData);
    }

    save(city: City) {
        return this.repository.save(city);
    }

    find() {
        return this.repository.find();
    }

    findOne(condition: any) {
        return this.repository.findOne(condition);
    }

    remove(city: City) {
        return this.repository.remove(city);
    }
}
