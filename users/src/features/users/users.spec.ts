import { prismaMock } from '../../../singleton';
import {
  allUsers,
  createUserPayload,
  newUser,
  updatedUser,
  updateUserPayload,
} from '../../../test/mocks/users-mocks';
import { UsersService } from '../../services/users.service';
import { mocked } from 'jest-mock';
import { UsersController } from './users.controller';
import { PrismaService } from '../../database/prisma/prisma.service';

jest.mock('../../database/prisma/prisma.service.ts');
describe('Users Use Case', () => {
  const MockedPrismaService = mocked(PrismaService, true);
  const create = jest.fn().mockResolvedValue(newUser);
  const findMany = jest.fn().mockResolvedValue(allUsers);
  const findUnique = jest.fn().mockResolvedValue(newUser);
  const update = jest.fn().mockResolvedValue(updatedUser);
  // const delete = jest.fn().mockResolvedValue();

  MockedPrismaService.mockImplementation(
    () =>
      ({
        user: { findMany, create, findUnique, update },
      } as unknown as PrismaService),
  );
  const prismaServiceMock = new PrismaService();
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(() => {
    usersService = new UsersService(prismaServiceMock);
    usersController = new UsersController(usersService);
  });

  it('should be able to create a new user', async () => {
    prismaMock.user.create.mockResolvedValueOnce(newUser);

    await expect(
      usersController.createUser(createUserPayload),
    ).resolves.toEqual(newUser);
  });

  it('should be able to get all the currently existing users', async () => {
    prismaMock.user.findMany.mockResolvedValueOnce(allUsers);

    await expect(usersController.users()).resolves.toEqual(allUsers);
  });

  it('should be able to get a specific user', async () => {
    prismaMock.user.findUnique.mockResolvedValueOnce(newUser);

    await expect(usersController.getUserById('abcde')).resolves.toEqual(
      newUser,
    );
  });

  it('should be able to update a user', async () => {
    prismaMock.user.update.mockResolvedValueOnce(updatedUser);

    await expect(
      usersController.updateUser('abcde', updateUserPayload),
    ).resolves.toEqual(updatedUser);
  });
});
