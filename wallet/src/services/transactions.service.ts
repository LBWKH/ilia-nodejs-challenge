import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

export enum TransactionTypes {
  credit = 'CREDIT',
  debit = 'DEBIT',
}

type CreateTransactionParams = {
  userId: string;
  type: TransactionTypes;
  amount: number;
};
@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const allTransactions = await this.prisma.transaction.findMany();

    const formattedTransactions = allTransactions.map(
      ({ userId, ...transaction }) => ({
        user_id: userId,
        ...transaction,
      }),
    );

    return formattedTransactions;
  }

  async create({ userId, type, amount }: CreateTransactionParams) {
    const { userId: user_id, ...response } =
      await this.prisma.transaction.create({
        data: { userId, type, amount },
      });

    return { user_id, ...response };
  }

  async balance() {
    return 10;
  }
}
