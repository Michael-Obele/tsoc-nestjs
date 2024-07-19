import { IsEmail, IsString, Length } from "class-validator";

export class RegisterUserDto {

    @IsString()
    name: string
    @IsString()
    password: string
    @IsEmail()
    email: string
}
