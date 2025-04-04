import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from '../dto/register.dto';
import { LoginAuthDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  register(registerAuthDto: RegisterAuthDto) {
    // check user already exis in db
    // if exist return response with message use already exist
    // else convert password to hash
    // create user in user service 
    // if user get created in service then send message user gets created
    // send verification token on email or otp on phone number
    // if user verified then mark status as verfied otherwise unverified
    console.log(registerAuthDto)
    // call user service api http call (synchronouse call)
    // for sending email or opt use (asynchronouse event driven approach)
    return 'This action adds a new auth';
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
