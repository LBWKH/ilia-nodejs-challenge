import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

type CreateUserParams = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const allUsers = await this.prisma.user.findMany();

    return allUsers;
  }

  async create(params: CreateUserParams) {
    const user = await this.prisma.user.create({
      data: params,
    });

    return user;
  }
}
