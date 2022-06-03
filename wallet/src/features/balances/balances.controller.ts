import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import {
  TransactionsService,
  TransactionTypes,
} from 'src/services/transactions.service';
import { JwtGuard } from '../auth/jwt.guard';

type CreateTransactionPayload = {
  user_id: string;
  type: TransactionTypes;
  amount: number;
};

@Controller('balances')
export class BalancesController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  @UseGuards(JwtGuard)
  balances() {
    return this.transactionsService.balance();
  }
}
