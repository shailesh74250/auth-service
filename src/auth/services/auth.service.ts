import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from '../dto/register.dto';
import { LoginAuthDto } from '../dto/login.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async callUserService(url, data, headers): Promise<any>  {
    const observable = this.httpService.post(url, data, { headers });
    const response = await firstValueFrom(observable);
    console.log(response.data);
    return response.data;
  }

  register(registerAuthDto: RegisterAuthDto) {
    // check user already exis in db
    // if exist return response with message use already exist
    // else convert password to hash
    // create user in user service 
    // if user get created in service then send message user gets created
    // send verification token on email or otp on phone number
    // if user verified then mark status as verfied otherwise unverified
    const url = process.env.USER_SERVICE_API;
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.USER_SERVICE_API_KEY,
    };
    console.log(url, headers);
    console.log(registerAuthDto)
    const result = this.callUserService(url, registerAuthDto, headers);
    console.log({result});
    // call user service api http or gRPC call (synchronouse call) 
    // for sending email or opt use (asynchronouse event driven approach)
    return result;
  }

  login(loginAuthDto: LoginAuthDto) {
    // recieve login email and password
    // fetch user from user service with email id 
    // create password has and compare with db password
    // if match then generate jwt token with user detials in token
    // send token to user 
    // also store token in specific auth table
    // create refresh token for long session and send back to client
    console.log(loginAuthDto)
    // call users service api for getting user detials (synchronouse call)
    return `This action returns all auth`;
  }
}
