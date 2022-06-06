import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt-strategy.service';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategyService, PrismaService],
})
export class AuthModule {}
