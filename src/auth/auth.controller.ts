import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDTO } from './dto/login-response.dto';
import { RegisterRequestDto } from './dto/register-request.dto';
import { RegisterResponseDTO } from './dto/register-response.dto';
import { ApiTags } from '@nestjs/swagger';

import { Public } from '../decorators/public.decorator';
import { User } from '@prisma/client';

@Public()
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // 身份验证守卫
  @Post('login')
  async login(
    @Body() loginDto: LoginRequestDto,
    @Request() req,
  ): Promise<LoginResponseDTO | BadRequestException> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(
    @Body() registerBody: RegisterRequestDto,
  ): Promise<RegisterResponseDTO | BadRequestException> {
    return await this.authService.register(registerBody);
  }

  // 获取用户信息
  @Get('me')
  @UseGuards(AuthGuard('jwt')) // 身份验证守卫
  async getMe(@Request() req) {
    return await this.authService.getUserInfo(req.user);
  }
}
