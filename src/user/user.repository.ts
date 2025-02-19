import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) { }

    create(userData: Partial<User>): User {
        return this.repository.create(userData);
    }

    save(user: User): Promise<User> {
        return this.repository.save(user);
    }

    find(): Promise<User[]> {
        return this.repository.find();
    }


    async findOne(condition: any): Promise<User> {
        const user = await this.repository.findOne(condition);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }


    async findOneByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.repository.findOne({ where: { email } });
    }

    remove(user: User): Promise<User> {
        return this.repository.remove(user);
    }
}

