import { BadGatewayException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataservice: DatabaseService
  ) { }

  async login(loginData: LoginDto) {
    const user = await this.dataservice.user.findFirst({
      where: {
        email: email
      }
    });
    if (!user) {
      throw new BadGatewayException('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadGatewayException('Invalid password');
    }
    return user;
  }
  async register(registerData: RegisterUserDto) {
    const user = await this.dataservice.user.findFirst(
      {
        where: {
          email: registerData.email
        }
      }
    );
    if (user) {
      throw new BadGatewayException('User with this email already exists')
    }
    registerData.password = await bcrypt.hash(registerData.password, 10)
    const res = await this.dataservice.user.create({ data: registerData })
    return res;
  }

}
