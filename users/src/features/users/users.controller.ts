import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { JwtGuard } from '../auth/jwt.guard';

type CreateUserPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type UpdateUserPayload = {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
};

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UseGuards(JwtGuard)
  createUser(@Body() payload: CreateUserPayload) {
    return this.usersService.create(payload);
  }

  @Get()
  @UseGuards(JwtGuard)
  users() {
    return this.usersService.getAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  updateUser(@Param('id') id: string, @Body() body: UpdateUserPayload) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteUser(@Param('id') id: string) {
    this.usersService.delete(id);
    return {};
  }
}
