import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { News } from './News';
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
    const { getByTestId } = render(<News />);

    fireEvent.change(getByTestId('news/search'), { target: { value: 'apple' } });
    expect(getByTestId('news/search')).toHaveValue('apple');
  });
});

describe('Page has correct warning', () => {
  test('Page has "Пожалуйста, введите запрос" warning', () => {
    // Рендерим компонент
    // Проверяем наличие текста
    const { getByText } = render(<News />);

    expect(getByText('Пожалуйста, введите запрос...')).toBeInTheDocument();
  });

  test('Page has "Новости по данному запросу еще не написаны..." warning', async () => {
    // Рендерим компонент
    // Обозначаем данные, возвращаемые API (null, чтобы карточки не отображались)
    // Вводим поисковую фразу
    // Сабмитим
    // Ожидаем ответа от сервера
    // Проверяем наличие текста
    const { getByTestId, findByText } = render(<News />);

    axios.get = jest.fn().mockResolvedValue({
      data: null,
    });

    fireEvent.change(getByTestId('news/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('news/search-btn'));
    expect(await findByText(/Новости по данному запросу еще не написаны/i)).toBeInTheDocument();
  });

  test('Page has "Загрузка..." warning', () => {
    // Рендерим компонент
    // Обозначаем данные, возвращаемые API (здесть возвращаемое значение неважно)
    // Вводим поисковую фразу
    // Сабмитим
    // Не ожидаем ответа от сервера
    // Проверяем наличие текста
    const { getByTestId, getByText } = render(<News />);

    axios.get = jest.fn().mockResolvedValue({
      data: null,
    });

    fireEvent.change(getByTestId('news/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('news/search-btn'));
    expect(getByText('Загрузка...')).toBeInTheDocument();
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
    const { getByTestId, findAllByTestId } = render(<News />);

    axios.get = jest.fn().mockResolvedValue({
      data: dataForThreeCards,
    });

    fireEvent.change(getByTestId('news/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('news/search-btn'));
    expect((await findAllByTestId('news/card')).length).toEqual(3);
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

    const { getByTestId, findAllByTestId } = render(<News />);

    axios.get = jest.fn().mockResolvedValue({
      data: dataForThreeCards,
    });

    fireEvent.change(getByTestId('news/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('news/search-btn'));
    fireEvent.click((await findAllByTestId('news/card'))[0]);
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

    const { getByTestId, findAllByTestId } = render(<News />);

    axios.get = jest.fn().mockResolvedValue({
      data: dataForThreeCards,
    });

    fireEvent.change(getByTestId('news/search'), { target: { value: 'hgkfnghgkifhngh' } });
    fireEvent.click(getByTestId('news/search-btn'));
    fireEvent.click((await findAllByTestId('news/card'))[0]);
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
    fireEvent.click(getByTestId('modal'));
    expect(getByTestId('modal').classList.contains('modal')).toBe(true);
  });
});
