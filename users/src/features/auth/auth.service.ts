import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { PrismaService } from 'src/database/prisma/prisma.service';

// const users = [
//   {
//     id: 1,
//     username: 'user1@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
//     role: 'admin',
//   },
//   {
//     id: 2,
//     username: 'user2@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
//     role: 'user',
//   },
//   {
//     id: 3,
//     username: 'user3@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
//     role: 'user',
//   },
// ];

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email, password) {
    const user = await this.validateCredentials(email, password);
    console.log('que', user);
    const payload = { sub: user.id, email: user.email };
    console.log('eota', payload);
    const bla = this.jwtService.sign(payload);
    console.log('AAA', bla);
    return bla;
    // return user;
  }

  private async validateCredentials(email, password) {
    const users = await this.prisma.user.findMany();
    console.log('all', users);
    const user = users.find(
      (item) => item.email === email && item.password === password,
      // && compareSync(password, item.password),
    );
    console.log('one', user);

    return user;
  }
}
