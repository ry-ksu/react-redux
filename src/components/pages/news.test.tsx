import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Games } from './Games';
import axios from 'axios';
import { dataForThreeCards } from '../../tests';

afterEach(() => {
  cleanup();
});

describe('Search tests', () => {
  test('Search has value', () => {
    // Рендерим компонент
    // Вводим поисковую фразу
    // Проверяем значение фразы
    const { getByTestId } = render(<Games />);

    fireEvent.change(getByTestId('games/search'), { target: { value: 'apple' } });
    expect(getByTestId('games/search')).toHaveValue('apple');
  });
});

describe('Page has correct warning', () => {
  test('Page has "Пожалуйста, введите запрос" warning', () => {
    // Рендерим компонент
    // Проверяем наличие текста
    const { getByText } = render(<Games />);

    expect(getByText('Пожалуйста, введите запрос...')).toBeInTheDocument();
  });

  test('Page has "Игры по данному запросу еще не созданы..." warning', async () => {
    // Рендерим компонент
    // Обозначаем данные, возвращаемые API (null, чтобы карточки не отображались)
    // Вводим поисковую фразу
    // Сабмитим
    // Ожидаем ответа от сервера
    // Проверяем наличие текста
    const { getByTestId, findByText } = render(<Games />);

    axios.get = jest.fn().mockResolvedValue({
      data: null,
    });

    fireEvent.change(getByTestId('games/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('games/search-btn'));
    expect(await findByText(/Игры по данному запросу еще не созданы/i)).toBeInTheDocument();
  });

  test('Page has loader', () => {
    // Рендерим компонент
    // Обозначаем данные, возвращаемые API (здесть возвращаемое значение неважно)
    // Вводим поисковую фразу
    // Сабмитим
    // Не ожидаем ответа от сервера
    // Проверяем наличие текста
    const { getByTestId } = render(<Games />);

    axios.get = jest.fn().mockResolvedValue({
      data: null,
    });

    fireEvent.change(getByTestId('games/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('games/search-btn'));
    expect(getByTestId('loader').classList.contains('loader_active')).toBe(true);
  });
});

describe('Page has correct count of cards', () => {
  test('Page has 3 cards', async () => {
    // Ренедрим компонент
    // Обозначаем данные, возвращаемые API (возвращаем 3 объекта)
    // Вводим поисковую фразу
    // Сабмитим
    // Ожидаем ответа от сервера
    // Проверяем количество карточек
    const { getByTestId, findAllByTestId } = render(<Games />);

    axios.get = jest.fn().mockResolvedValue({
      data: dataForThreeCards,
    });

    fireEvent.change(getByTestId('games/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('games/search-btn'));
    expect((await findAllByTestId('games/card')).length).toEqual(3);
  });
});

describe('Modal is open/closed', () => {
  test('Modal is open', async () => {
    // Ренедрим компонент
    // Вводим поисковую фразу
    // Сабмитим
    // Ожидаем ответа от сервера
    // Нажимаем на карточку
    // Проверяем, что модальное окно открыто

    const { getByTestId, findAllByTestId } = render(<Games />);

    axios.get = jest.fn().mockResolvedValue({
      data: dataForThreeCards,
    });

    fireEvent.change(getByTestId('games/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('games/search-btn'));
    fireEvent.click((await findAllByTestId('games/card'))[0]);
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
  });

  test('Modal is close', async () => {
    // Ренедрим компонент
    // Вводим поисковую фразу
    // Сабмитим
    // Ожидаем ответа от сервера
    // Нажимаем на карточку
    // Проверяем, что модальное окно открыто
    // Нажимаем на область вне модального окна
    // Проверяем, что модальное окно закрыто

    const { getByTestId, findAllByTestId } = render(<Games />);

    axios.get = jest.fn().mockResolvedValue({
      data: dataForThreeCards,
    });

    fireEvent.change(getByTestId('games/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('games/search-btn'));
    fireEvent.click((await findAllByTestId('games/card'))[0]);
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
    fireEvent.click(getByTestId('modal'));
    expect(getByTestId('modal').classList.contains('modal')).toBe(true);
  });
});
