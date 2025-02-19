import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Role } from 'src/auth/enum/role.enum';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    role?: Role;

    @IsOptional()
    isActive?: boolean;
}
