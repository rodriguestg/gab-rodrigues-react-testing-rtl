import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente <Pokedex />', () => {
  test('Teste se a página contém um heading com uma mensagem', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toHaveTextContent(/Encountered pokémons/i);
  });
  test('Teste se a página mostra o button', () => {
    renderWithRouter(<App />);
    const prox = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(prox).toBeInTheDocument();
  });
  test('Teste se a página tem um button de filtragem', () => {
    renderWithRouter(<App />);
    const btnFilter = screen.getAllByTestId('pokemon-type-button');
    expect(btnFilter[0]).toBeInTheDocument();
  });
  test('Teste se a página tem um button de reset na filtragem', () => {
    renderWithRouter(<App />);
    const reset = screen.getByRole('button', { name: 'All' });
    const click = reset.getAttribute('onClick') === '{ () => filterPokemons("all") }';
    userEvent.click(reset);
    expect(click).toBeDefined();
  });
  test('Teste se a página mostra o tipo do pokemon correto', () => {
    renderWithRouter(<App />);
    const btnFilter = screen.getAllByTestId('pokemon-type-button');
    expect(btnFilter[0]).toHaveTextContent('Electric');
    // userEvent.click(reset);
  });
});
