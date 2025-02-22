import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';

import {
  TransactionsService,
  TransactionTypes,
} from '../../services/transactions.service';
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
  transactions(@Query() type: TransactionTypes) {
    return this.transactionsService.getAll(type);
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
