import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente <App />', () => {
  test('Testando se os links Home, About e Favorite estão no App', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkHome = screen.getByText(/Home/i);
    expect(linkHome).toBeInTheDocument();
    const linkAbout = screen.getByText(/About/i);
    expect(linkAbout).toBeInTheDocument();
    const linkFavoritePokemons = screen.getByText(/Favorite Pokémons/i);
    expect(linkFavoritePokemons).toBeInTheDocument();
  });
});
