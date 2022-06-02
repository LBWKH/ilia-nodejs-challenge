import { Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from 'src/services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  transactions() {
    return this.transactionsService.getAll();
  }

  @Post()
  createTransaction() {
    return this.transactionsService.create();
  }
}
