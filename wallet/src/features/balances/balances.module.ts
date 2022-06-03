import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TransactionsService } from 'src/services/transactions.service';
import { BalancesController } from './balances.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), DatabaseModule],
  controllers: [BalancesController],
  providers: [TransactionsService],
})
export class BalancesModule {}
