import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  TransactionsService,
  TransactionTypes,
} from 'src/services/transactions.service';

type CreateTransactionPayload = {
  user_id: string;
  type: TransactionTypes;
  amount: number;
};

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  transactions() {
    return this.transactionsService.getAll();
  }

  @Post()
  createTransaction(@Body() { user_id, ...payload }: CreateTransactionPayload) {
    return this.transactionsService.create({
      userId: user_id,
      ...payload,
    });
  }
}
