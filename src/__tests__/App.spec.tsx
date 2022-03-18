import { describe, it, expect } from 'vitest';
import Modal from 'react-modal';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AxiosMock from 'axios-mock-adapter';

import { App } from '../App';
import { api } from '../services/api';

const apiMock = new AxiosMock(api);

describe('App Page', () => {
  beforeEach(() => {
    apiMock.reset();

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
  })

  it('should render transactions table', async () => {
    render(<App />);

    expect(await screen.findByText('Freelance de website')).toBeInTheDocument();
  });

  it('should render summary', async () => {
    render(<App />);

    expect(await screen.findByText('R$ 4.900,00')).toBeInTheDocument();
  });

  it('should render modal', async () => {
    const { container } = render(<App />);

    Modal.setAppElement(container);

    userEvent.click(screen.getByText('Nova transação'));

    expect(await screen.findByText('Cadastrar transação')).toBeInTheDocument();
  });

  it('should create new deposit transaction', async () => {
    const transaction = {
      id: 3,
      title: 'Restituição do IR',
      type: 'deposit',
      category: 'Imposto',
      amount: 500,
      createdAt: new Date('2021-02-14 11:00:00').toString(),
    };

    apiMock.onPost('transactions').reply(200, { transaction });

    const { container } = render(<App />);

    Modal.setAppElement(container);

    userEvent.click(screen.getByText('Nova transação'));

    expect(await screen.findByText('Cadastrar transação')).toBeInTheDocument();

    userEvent.type(await screen.findByPlaceholderText(/Título/), "Restituição do IR");
    userEvent.type(await screen.findByPlaceholderText(/Valor/), "500");
    userEvent.click(await screen.findByText('Entrada'));
    userEvent.type(await screen.findByPlaceholderText(/Categoria/), "Imposto");
    userEvent.click(screen.getByText('Cadastrar'));

    const income = 'R$ 6.500,00';
    const total = 'R$ 5.400,00';

    expect(await screen.findByText(income)).toBeInTheDocument();
    expect(await screen.findByText(total)).toBeInTheDocument();
    expect(await screen.findByText('Restituição do IR')).toBeInTheDocument();

  });

  it('should create new withdraw transaction', async () => {
    const transaction = {
      id: 3,
      title: 'Conta de água',
      type: 'withdraw',
      category: 'Casa',
      amount: 40,
      createdAt: new Date('2021-02-14 11:00:00').toString(),
    };

    apiMock.onPost('transactions').reply(200, { transaction });

    const { container } = render(<App />);

    Modal.setAppElement(container);

    userEvent.click(screen.getByText('Nova transação'));

    expect(await screen.findByText('Cadastrar transação')).toBeInTheDocument();

    userEvent.type(await screen.findByPlaceholderText(/Título/), "Conta de água");
    userEvent.type(await screen.findByPlaceholderText(/Valor/), "40");
    userEvent.click(await screen.findByText('Saída'));
    userEvent.type(await screen.findByPlaceholderText(/Categoria/), "Casa");
    userEvent.click(screen.getByText('Cadastrar'));

    const outcome = '-R$ 1.140,00';
    const total = 'R$ 4.860,00';

    expect(await screen.findByText(outcome)).toBeInTheDocument();
    expect(await screen.findByText(total)).toBeInTheDocument();
    expect(await screen.findByText('Conta de água')).toBeInTheDocument();

  });
});
