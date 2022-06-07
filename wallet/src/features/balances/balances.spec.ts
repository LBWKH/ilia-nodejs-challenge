import { prismaMock } from '../../../singleton';

import { TransactionsService } from '../../services/transactions.service';
import { mocked } from 'jest-mock';
import { BalancesController } from '../balances/balances.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { balanceMock } from '../../../test/mocks/balances-mocks';

jest.mock('../../database/prisma/prisma.service.ts');
describe('Balances Use Case', () => {
  const MockedPrismaService = mocked(PrismaService, true);

  const $queryRaw = jest.fn().mockResolvedValue(balanceMock);
  MockedPrismaService.mockImplementation(
    () =>
      ({
        $queryRaw,
      } as unknown as PrismaService),
  );
  const prismaServiceMock = new PrismaService();
  let balancesController: BalancesController;
  let transactionsService: TransactionsService;

  beforeEach(() => {
    transactionsService = new TransactionsService(prismaServiceMock);
    balancesController = new BalancesController(transactionsService);
  });

  it('should be able to get the balance from all transactions', async () => {
    prismaMock.$queryRaw.mockResolvedValueOnce(balanceMock);

    await expect(balancesController.balances()).resolves.toEqual(balanceMock);
  });
});
