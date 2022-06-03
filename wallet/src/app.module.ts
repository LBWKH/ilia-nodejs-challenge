import { Module } from '@nestjs/common';
import { TransactionsModule } from './features/transactions/transactions.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [TransactionsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
