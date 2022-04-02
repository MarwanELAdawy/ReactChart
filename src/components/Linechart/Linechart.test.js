import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Linechart from './Linechart';

describe('<Linechart />', () => {
  test('it should mount', () => {
    render(<Linechart />);
    
    const linechart = screen.getByTestId('Linechart');

    expect(linechart).toBeInTheDocument();
  });
});