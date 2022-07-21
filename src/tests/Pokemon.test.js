import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente <Pokemon />', () => {
  test('Teste se a página contém o nome correto do pokemon', () => {
    renderWithRouter(<App />);
    const namePoke = screen.getByTestId('pokemon-name');
    expect(namePoke).toHaveTextContent(/Pikachu/i);
  });
  test('Teste se a página contém o tipo correto do pokemon', () => {
    renderWithRouter(<App />);
    const namePoke = screen.getByTestId('pokemon-type');
    expect(namePoke).toHaveTextContent(/Electric/i);
  });
  test('Teste se a página contém a descrição (alt) e icon correto', () => {
    renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(favLink);
    const favCheck = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favCheck);
    const fav = screen.getAllByRole('img')[1];
    expect(fav).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    expect(fav).toHaveAttribute('src', '/star-icon.svg');
  });
  test('Teste se a página contém a imagem do pokemon com alt e icon correto', () => {
    renderWithRouter(<App />);
    const fav = screen.getAllByRole('img')[0];
    expect(fav).toHaveAttribute('alt', 'Pikachu sprite');
    expect(fav).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});
