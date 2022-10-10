import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '.';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  test('render App', () => {
    const { getByTestId } = render(<App />, { wrapper: BrowserRouter });

    expect(getByTestId('pages/games')).toBeInTheDocument();
  });

  test('switch games/about page', async () => {
    const { getByTestId, getByText, findByTestId } = render(<App />, { wrapper: BrowserRouter });

    expect(getByTestId('pages/games')).toBeInTheDocument();
    fireEvent.click(getByText('About'));
    expect(await findByTestId('pages/about')).toBeInTheDocument();
    fireEvent.click(getByText('Games'));
  });

  test('switch games/forms pages', async () => {
    const { getByTestId, getByText, findByTestId } = render(<App />, { wrapper: BrowserRouter });

    expect(getByTestId('pages/games')).toBeInTheDocument();
    fireEvent.click(getByText('Forms'));
    expect(await findByTestId('pages/user-forms')).toBeInTheDocument();
    fireEvent.click(getByText('Games'));
  });

  test('check localStorage', async () => {
    const { getByText, getByTestId, findByText } = render(<App />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId('pages/games')).toBeInTheDocument();
    fireEvent.change(getByTestId('searchbox'), { target: { value: 'urodhngldh' } });
    expect(getByTestId('searchbox')).toHaveValue('urodhngldh');
    expect(getByTestId('searchbox')).not.toHaveValue('u5rodhngldh');
    fireEvent.click(getByText('About'));
    fireEvent.click(await findByText('Games'));
    expect(getByTestId('searchbox')).toHaveValue('urodhngldh');
    expect(getByTestId('searchbox')).not.toHaveValue('u5rodhngldh');
  });
});
