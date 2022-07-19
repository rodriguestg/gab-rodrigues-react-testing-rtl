import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../pages/About';

describe('Testando o componente <About />', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    render(<About />);
    const pokedex = screen.getByText('This application simulates a Pokédex',
      { exact: false });
    expect(pokedex).toBeInTheDocument();
    const h2 = screen.getByRole('heading');
    expect(h2).toHaveTextContent(/About Pokédex/i);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    const paragraph = screen.getAllByText('Pokémons', { exact: false });
    expect(paragraph).toHaveLength(2);
  });
});
