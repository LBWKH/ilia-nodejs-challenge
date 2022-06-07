import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email, password) {
    const user = await this.validateCredentials(email, password);

    const payload = { sub: user?.id, email: user?.email };

    const token = this.jwtService.sign(payload);

    return { token: token };
  }

  private async validateCredentials(email, password) {
    const users = await this.prisma.user.findMany();

    const user = users.find(
      (item) => item.email === email && item.password === password,
      // && compareSync(password, item.password),
    );

    return user;
  }
}
