import { IsEmail, IsString, Length } from "class-validator";

export class RegisterUserDto {
    @Length(2, 20)
    @IsString()
    name: string
    @IsString()
    password: string
    @IsEmail()
    email: string
}
