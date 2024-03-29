import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/data/user.document';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { Token } from './interfaces/token';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(userDto: CreateUserDto): Promise<UserDocument> {
    return await this.usersService.create(userDto);
  }

  async login(loginUserDto: LoginDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this.createToken(user.username);

    return {
      username: user.username,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserDocument> {
    const user = await this.usersService.findByPayload(payload);
    if (!user)
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);

    return user;
  }

  private createToken(username: string): Token {
    const expiresIn = '7d';

    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);
    console.log(accessToken);

    return {
      expiresIn,
      accessToken,
    };
  }
}
