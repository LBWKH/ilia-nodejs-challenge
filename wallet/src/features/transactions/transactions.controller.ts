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

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  @UseGuards(JwtGuard)
  transactions() {
    return this.transactionsService.getAll();
  }

  @Post()
  @UseGuards(JwtGuard)
  createTransaction(@Body() { user_id, ...payload }: CreateTransactionPayload) {
    return this.transactionsService.create({
      userId: user_id,
      ...payload,
    });
  }
}
