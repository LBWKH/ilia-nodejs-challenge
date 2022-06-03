import { Module } from '@nestjs/common';
import { TransactionsModule } from './features/transactions/transactions.module';
import { AuthModule } from './features/auth/auth.module';
import { BalancesModule } from './features/balances/balances.module';

@Module({
  imports: [TransactionsModule, BalancesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
