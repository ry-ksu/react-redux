import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '.';
import userEvent from '@testing-library/user-event';

describe('Search component', () => {
  it('renders Search component', () => {
    render(<Search />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders Search component with placeholder', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText('Найти игру...')).toBeInTheDocument();
  });

  it('Search works', () => {
    render(<Search />);

    userEvent.type(screen.getByRole('searchbox'), 'witcher');

    expect(screen.getByText(/The Witcher/i)).toBeInTheDocument();
    expect(screen.queryByText(/Mass/i)).toBeNull();
  });

  // it('LocalStorage works', () => {
  //   render(<Search />);

  //   userEvent.type(screen.getByRole('searchbox'), 'witcher');

  // })
});
