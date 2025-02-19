import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'auth' })
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @ManyToOne(() => User, { eager: true })
    user: User;

    @CreateDateColumn()
    createdAt: Date;
}

