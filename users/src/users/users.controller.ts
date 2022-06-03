import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

// import { TransactionsService } from 'src/services/transactions.service';
// import { JwtGuard } from '../auth/jwt.guard';

type CreateUserPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  // @UseGuards(JwtGuard)
  createUser(@Body() payload: CreateUserPayload) {
    return this.usersService.create(payload);
  }

  @Get()
  // @UseGuards(JwtGuard)
  users() {
    return this.usersService.getAll();
  }
}
