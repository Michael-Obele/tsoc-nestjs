import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(JwtAuthGuard)

    @Post()
    create(@Body() registerData: RegisterUserDto) {
        return this.authService.register(registerData);
    }


    @Get()
    login(@Body() loginData: LoginDto) {
        return this.authService.login(loginData)
    }

}
