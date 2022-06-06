import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from '../auth/auth.module';
import { UsersService } from 'src/services/users.service';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
