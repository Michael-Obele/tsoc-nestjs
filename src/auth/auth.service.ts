import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  register(RegisterUserDto: RegisterUserDto) {
    return 'This action adds a new auth';
  }

}
