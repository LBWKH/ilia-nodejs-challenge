import { prismaMock } from '../../../singleton';
import {
  allTransactions,
  allTransactionsFormatted,
  newTransaction,
  newTransactionPayload,
  newTransactionResult,
} from '../../../test/mocks/transactions-mocks';
import { TransactionsService } from '../../services/transactions.service';
import { mocked } from 'jest-mock';
import { TransactionsController } from '../transactions/transactions.controller';
import { PrismaService } from '../../database/prisma/prisma.service';

jest.mock('../../database/prisma/prisma.service.ts');
describe('Transactions Use Case', () => {
  const MockedPrismaService = mocked(PrismaService, true);
  const create = jest.fn().mockResolvedValue(newTransaction);
  const findMany = jest.fn().mockResolvedValue(allTransactions);
  MockedPrismaService.mockImplementation(
    () =>
      ({
        transaction: { findMany, create },
      } as unknown as PrismaService),
  );
  const prismaServiceMock = new PrismaService();
  let transactionsController: TransactionsController;
  let transactionsService: TransactionsService;

  beforeEach(() => {
    transactionsService = new TransactionsService(prismaServiceMock);
    transactionsController = new TransactionsController(transactionsService);
  });

  it('should be able to create a new transaction', async () => {
    prismaMock.transaction.create.mockResolvedValueOnce(newTransaction);

    await expect(
      transactionsController.createTransaction(newTransactionPayload),
    ).resolves.toEqual(newTransactionResult);
  });

  it('should be able to get all the currently existing transactions', async () => {
    prismaMock.transaction.findMany.mockResolvedValueOnce(allTransactions);

    await expect(transactionsController.transactions()).resolves.toEqual(
      allTransactionsFormatted,
    );
  });
});
