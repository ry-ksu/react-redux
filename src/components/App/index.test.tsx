import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import App from '.';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  test('render App', () => {
    const { getByTestId } = render(<App />, { wrapper: BrowserRouter });

    expect(getByTestId('pages/games')).toBeInTheDocument();
  });

  test('switch page', async () => {
    const { getByTestId, getByText, findByTestId } = render(<App />, { wrapper: BrowserRouter });

    expect(getByTestId('pages/games')).toBeInTheDocument();
    fireEvent.click(getByText('About'));
    expect(await findByTestId('pages/about')).toBeInTheDocument();
    fireEvent.click(getByText('Games'));
  });

  test('check localStorage', async () => {
    const { getByRole, getByText, getByTestId, findByRole, findByText } = render(<App />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId('pages/games')).toBeInTheDocument();
    fireEvent.change(getByRole('searchbox'), { target: { value: 'urodhngldh' } });
    expect(getByRole('searchbox')).toHaveValue('urodhngldh');
    expect(getByRole('searchbox')).not.toHaveValue('u5rodhngldh');
    fireEvent.click(getByText('About'));
    fireEvent.click(await findByText('Games'));
    expect(await findByRole('searchbox')).toHaveValue('urodhngldh');
    expect(await findByRole('searchbox')).not.toHaveValue('u5rodhngldh');
  });
});
