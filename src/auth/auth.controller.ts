import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Auth')

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // @UseGuards(JwtAuthGuard)

    @Post('register')
    @ApiOperation({ description: "To register a new user with email", summary: "Register User with details" })
    create(@Body() registerData: RegisterUserDto) {
        return this.authService.register(registerData);
    }


    @Post('login')
    @ApiOperation({ description: "To log in a user with email and password", summary: "Log In User" })
    login(@Body() loginData: LoginDto) {
        return this.authService.login(loginData)
    }

}
