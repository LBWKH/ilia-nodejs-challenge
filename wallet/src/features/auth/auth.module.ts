import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt-strategy.service';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: 'ILIACHALLENGE',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
