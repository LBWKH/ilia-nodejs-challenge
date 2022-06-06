import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

type CreateUserParams = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type UpdateUserParams = {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const allUsers = await this.prisma.user.findMany();

    return allUsers;
  }

  async getUser(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  async create(params: CreateUserParams) {
    const user = await this.prisma.user.create({
      data: params,
    });

    return user;
  }

  async update(id: string, params: UpdateUserParams) {
    return this.prisma.user.update({ where: { id: id }, data: params });
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
