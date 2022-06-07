import { Controller, Get, UseGuards } from '@nestjs/common';

import { TransactionsService } from '../../services/transactions.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('balances')
export class BalancesController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  @UseGuards(JwtGuard)
  balances() {
    return this.transactionsService.balance();
  }
}
