import React from 'react';
import { screen, render } from '@testing-library/react';
import { NotFound } from '../pages';

describe('Testando o componente <NotFound />', () => {
  test('Teste se a página contém um heading com uma mensagem', () => {
    render(<NotFound />);
    const h2 = screen.getByRole('heading');
    expect(h2).toHaveTextContent(/Page requested not found 😭/i);
  });
  test('Teste se a página mostra a imagem', () => {
    render(<NotFound />);
    const img = screen.getAllByRole('img')[1];
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
