import { TransactionTypes } from '../../src/services/transactions.service';

const allTransactions = [
  {
    userId: '123',
    id: 'abcde',
    type: TransactionTypes.credit,
    amount: 100,
    createdAt: new Date('2022-06-02T23:06:52.341Z'),
    updatedAt: new Date('2022-06-02T23:06:52.341Z'),
  },
  {
    userId: '321',
    id: 'fghij',
    type: TransactionTypes.debit,
    amount: 50,
    createdAt: new Date('2022-06-02T23:06:52.341Z'),
    updatedAt: new Date('2022-06-02T23:06:52.341Z'),
  },
];

const allTransactionsFormatted = [
  {
    user_id: '123',
    id: 'abcde',
    type: TransactionTypes.credit,
    amount: 100,
    createdAt: new Date('2022-06-02T23:06:52.341Z'),
    updatedAt: new Date('2022-06-02T23:06:52.341Z'),
  },
  {
    user_id: '321',
    id: 'fghij',
    type: TransactionTypes.debit,
    amount: 50,
    createdAt: new Date('2022-06-02T23:06:52.341Z'),
    updatedAt: new Date('2022-06-02T23:06:52.341Z'),
  },
];

const newTransaction = {
  userId: 'test',
  id: 'aaaaa',
  type: TransactionTypes.debit,
  amount: 50,
  createdAt: new Date('2022-06-02T23:06:52.341Z'),
  updatedAt: new Date('2022-06-02T23:06:52.341Z'),
};

const newTransactionResult = {
  user_id: 'test',
  id: 'aaaaa',
  type: TransactionTypes.debit,
  amount: 50,
  createdAt: new Date('2022-06-02T23:06:52.341Z'),
  updatedAt: new Date('2022-06-02T23:06:52.341Z'),
};

const newTransactionPayload = {
  user_id: 'test',
  type: TransactionTypes.debit,
  amount: 50,
};

export {
  allTransactions,
  newTransaction,
  newTransactionPayload,
  newTransactionResult,
  allTransactionsFormatted,
};
