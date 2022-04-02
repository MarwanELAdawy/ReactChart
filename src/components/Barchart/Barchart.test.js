import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Barchart from './Barchart';

describe('<Barchart />', () => {
  test('it should mount', () => {
    render(<Barchart />);
    
    const barchart = screen.getByTestId('Barchart');

    expect(barchart).toBeInTheDocument();
  });
});