import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AuthController, HttpModule],
  providers: [AuthService],
})
export class AuthModule {}
