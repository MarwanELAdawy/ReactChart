import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Piechart from './Piechart';

describe('<Piechart />', () => {
  test('it should mount', () => {
    render(<Piechart />);
    
    const piechart = screen.getByTestId('Piechart');

    expect(piechart).toBeInTheDocument();
  });
});