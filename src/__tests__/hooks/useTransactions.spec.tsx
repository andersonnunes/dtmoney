import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react-hooks';
import AxiosMock from 'axios-mock-adapter';

import { TransactionsProvider, useTransactions } from '../../hooks/useTransactions';
import { api } from '../../services/api';

const apiMock = new AxiosMock(api);

describe('useTransactions Hook', () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it('should be able to initialize transactions', async () => {
    const transactions = [
      {
        id: 1,
        title: 'Freelance de website',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-12 09:00:00').toString(),
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1100,
        createdAt: new Date('2021-02-14 11:00:00').toString(),
      }
    ];

    apiMock.onGet('transactions').reply(200, { transactions });

    const { result, waitForNextUpdate } = renderHook(useTransactions, {
      wrapper: TransactionsProvider
    });

    await waitForNextUpdate({ timeout: 200 });

    expect(result.current.transactions).toEqual(
      expect.arrayContaining(transactions)
    );
  });

  it('should be new transaction', async () => {
    const transactions = [
      {
        id: 1,
        title: 'Freelance de website',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-12 09:00:00').toString(),
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1100,
        createdAt: new Date('2021-02-14 11:00:00').toString(),
      }
    ];

    const transaction = {
      title: 'Conta de luz',
      type: 'withdraw',
      category: 'Casa',
      amount: 80
    };

    const newTransaction = {
      id: 3,
      title: 'Conta de luz',
      type: 'withdraw',
      category: 'Casa',
      amount: 80,
      createdAt: new Date('2021-02-14 11:00:00').toString(),
    };

    apiMock.onGet('transactions').reply(200, { transactions });
    apiMock.onPost('transactions').reply(200, { transaction: newTransaction });

    const { result, waitForNextUpdate } = renderHook(useTransactions, {
      wrapper: TransactionsProvider
    });

    act(() => {
      result.current.createTransaction(transaction);
    });

    await waitForNextUpdate({ timeout: 200 });

    expect(result.current.transactions).toEqual(
      expect.arrayContaining([newTransaction])
    );
  });
});
