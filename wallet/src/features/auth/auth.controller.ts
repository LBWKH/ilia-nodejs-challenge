import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  login(@Body() body) {
    const token = this.authService.login(body.email, body.password);

    return { token };
  }
}
