import React from 'react';
import { screen, render } from '@testing-library/react';
import { FavoritePokemons } from '../pages';

describe('Testando o componente <FavoritePokemons />', () => {
  test('É exibido "No favorite pokemon found", caso não tenha pokémons favoritos', () => {
    render(<FavoritePokemons />);
    const conditional = screen.queryByTestId('pokemon-name') === null
      ? screen.getByText('No favorite pokemon found')
      : screen.getByTestId('pokemon-name');
    expect(conditional).toBeInTheDocument();
  });
});
