import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '.';

describe('Search component', () => {
  it('renders Search component', () => {
    render(<Search />);

    // expect(screen.getByText(/Найти/i)).toBeInTheDocument();
  });
});
