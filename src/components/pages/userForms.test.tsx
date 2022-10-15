import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { UserForms } from './UserForms';

afterEach(() => {
  cleanup();
});

describe('UserForms fields tests', () => {
  test('Button is not disabled if some field has value', () => {
    // Рендерим компонент
    // Проверяем, что кнопку дизейбл
    // Изменяем первое поле
    // Проверяем, что кнопка не дизейбл
    const { getByTestId } = render(<UserForms />);

    expect(getByTestId('user-form/submit-btn').getAttribute('disabled')).toBeDefined();
    fireEvent.change(getByTestId('name'), { target: { value: 't' } });
    expect(getByTestId('user-form/submit-btn').getAttribute('disabled')).toBeNull();
  });

  test('Check name error', () => {
    // Рендерим компонент
    // Изменяем поле name
    // Проверяем, что ошибки нет
    // Сабмитим
    // Проверяем, что ошибка появилась
    const { getByTestId, queryByText, getByText } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 't' } });
    expect(queryByText('Имя не может состоять из одной буквы')).toBeNull();
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByText('Имя не может состоять из одной буквы')).toBeDefined();
  });

  test('Check birthday error', () => {
    // Рендерим компонент
    // Изменяем поле birthday
    // Проверяем, что ошибки нет
    // Сабмитим
    // Проверяем, что ошибка появилась
    const { getByTestId, queryByText, getByText } = render(<UserForms />);

    fireEvent.change(getByTestId('birthday'), { target: { value: '2032-10-04' } });
    expect(queryByText('К сожалению, вы еще не родились')).toBeNull();
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByText('К сожалению, вы еще не родились')).toBeDefined();
  });

  test('Check e-mail error', () => {
    // Рендерим компонент
    // Изменяем поле e-mail
    // Проверяем, что ошибки нет
    // Сабмитим
    // Проверяем, что ошибка появилась
    const { getByTestId, queryByText, getByText } = render(<UserForms />);

    fireEvent.change(getByTestId('e-mail'), { target: { value: 't' } });
    expect(queryByText('Проверьте корректность введенной почты')).toBeNull();
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByText('Проверьте корректность введенной почты')).toBeDefined();
  });

  test('Check enLvl error', () => {
    // Рендерим компонент
    // Изменяем поле name, так как при изменении enLvl ошибки не может быть
    // Проверяем, что ошибки нет
    // Сабмитим
    // Проверяем, что ошибка появилась
    const { getByTestId, queryByText, getByText } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 't' } });
    expect(queryByText('Необходимо выбрать уровень английского языка')).toBeNull();
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByText('Необходимо выбрать уровень английского языка')).toBeDefined();
  });

  test('Check enLvl not error', () => {
    // Рендерим компонент
    // Изменяем поле enLvl
    // Сабмитим
    // Проверяем, что ошибки нет
    const { getByTestId, queryByText } = render(<UserForms />);

    fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(queryByText('Необходимо выбрать уровень английского языка')).toBeNull();
  });

  test('Check file error', () => {
    // Рендерим компонент
    // Изменяем поле name, так как при изменении file ошибки не может быть
    // Проверяем, что ошибки нет
    // Сабмитим
    // Проверяем, что ошибка появилась
    const { getByTestId, queryByText, getByText } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 't' } });
    expect(queryByText('Необходимо загрузить фотографию')).toBeNull();
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByText('Необходимо загрузить фотографию')).toBeDefined();
  });

  test('Check file"s adding ', () => {
    // Рендерим компонент
    // Прикрепляем фото к полю file
    // Сабмитим
    // Проверяем, что ошибки нет
    const { getByTestId, queryByText } = render(<UserForms />);

    fireEvent.change(getByTestId('file'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(queryByText('Необходимо загрузить фотографию')).toBeNull();
  });

  test('Check PDAgreement error', () => {
    // Рендерим компонент
    // Изменяем поле name, так как при PDAgreement ошибки не может быть
    // Проверяем, что ошибки нет
    // Сабмитим
    // Проверяем, что ошибка появилась
    const { getByTestId, queryByText, getByText } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 't' } });
    expect(queryByText('Необходимо дать согласие на обработку персональных данных')).toBeNull();
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByText('Необходимо дать согласие на обработку персональных данных')).toBeDefined();
  });

  test('Check PDAgreement not error', () => {
    // Рендерим компонент
    // Изменяем поле PDAgreement
    // Сабмитим
    // Проверяем, что ошибки нет
    const { getByTestId, queryByText } = render(<UserForms />);

    fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(queryByText('Необходимо загрузить фотографию')).toBeNull();
  });
});

describe('Modal tests', () => {
  // Как вынести повторяющиеся части с заполнением данных?

  test('add modal from the first time', () => {
    // Рендерим компонент
    // Проверяем, что модальное окна не отображается (имеет класс со свойством display: none)
    // Корректно заполняем данные
    // Сабмитим
    // Проверяем, что появилось модальное окно

    const { getByTestId } = render(<UserForms />);

    expect(getByTestId('modal').classList.contains('modal')).toBe(true);

    fireEvent.change(getByTestId('name'), { target: { value: 'Nina' } });
    fireEvent.change(getByTestId('birthday'), { target: { value: '2012-10-04' } });
    fireEvent.change(getByTestId('e-mail'), { target: { value: 'nina@mail.ru' } });
    fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
    fireEvent.change(getByTestId('file'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });

    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
  });

  test('add modal from the second time', () => {
    // Тест необходим, чтобы проверить, что все работает корректно в случае ошибок
    // И модальное окно не появляется при каждом сабмите

    // Рендерим компонент
    // Корректно заполняем все данные, кроме поля name
    // Сабмитим
    // Проверяем, что модальное окно не появилось (имеет класс со свойством display: none)
    // Корректно заполняем все данные
    // Сабмитим
    // Проверяем, что модальное окно появилось

    const { getByTestId } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 5 } });
    fireEvent.change(getByTestId('birthday'), { target: { value: '2012-10-04' } });
    fireEvent.change(getByTestId('e-mail'), { target: { value: 'nina@mail.ru' } });
    fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
    fireEvent.change(getByTestId('file'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });

    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal')).toBe(true);
    fireEvent.change(getByTestId('name'), { target: { value: 'Lika' } });
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
  });

  test('add modal from the third time', () => {
    // При разработке возникли проблемы с перерисовкой
    // Тест проверяет, что проблема решена

    // Рендерим компонент
    // Корректно заполняем все данные, кроме поля name
    // Сабмитим
    // Проверяем, что модальное окно не появилось (имеет класс со свойством display: none)
    // Изменяем поле name на некорректное значение
    // Сабмитим
    // Проверяем, что модальное окно не появилось
    // Корректно заполняем все данные
    // Сабмитим
    // Проверяем, что модальное окно появилось

    const { getByTestId } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 5 } });
    fireEvent.change(getByTestId('birthday'), { target: { value: '2012-10-04' } });
    fireEvent.change(getByTestId('e-mail'), { target: { value: 'nina@mail.ru' } });
    fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
    fireEvent.change(getByTestId('file'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });

    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal')).toBe(true);
    fireEvent.change(getByTestId('name'), { target: { value: 6 } });
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal')).toBe(true);
    fireEvent.change(getByTestId('name'), { target: { value: 'Mary' } });
    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
  });

  test('Modal is closed', () => {
    // Рендерим компонент
    // Корректно заполняем все данные
    // Сабмитим
    // Проверяем, что модальное окно отображается
    // Закрываем модальное окно
    // Проверяем, что модлаьное окно не отображается
    const { getByTestId } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 'Lev' } });
    fireEvent.change(getByTestId('birthday'), { target: { value: '2012-10-04' } });
    fireEvent.change(getByTestId('e-mail'), { target: { value: 'nina@mail.ru' } });
    fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
    fireEvent.change(getByTestId('file'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });

    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('modal').classList.contains('modal_active')).toBe(true);
    fireEvent.click(getByTestId('modal'));
    expect(getByTestId('modal').classList.contains('modal')).toBe(true);
  });
});

describe('UserCards test', () => {
  test('add one card to UserCards', () => {
    // Рендерим компонент
    // Корректно заполняем данные в формке
    // Сабмитим
    // Проверяем, что карточка появилась
    const { getByTestId } = render(<UserForms />);

    fireEvent.change(getByTestId('name'), { target: { value: 'Ann' } });
    fireEvent.change(getByTestId('birthday'), { target: { value: '2012-10-04' } });
    fireEvent.change(getByTestId('e-mail'), { target: { value: 'nina@mail.ru' } });
    fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
    fireEvent.change(getByTestId('file'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });

    fireEvent.click(getByTestId('user-form/submit-btn'));
    expect(getByTestId('pages/user-card')).toBeInTheDocument();
  });

  test('add 5 cards to UserCards', () => {
    // Рендерим компонент
    // Корректно заполняем данные в форме несколько раз и сабмитим
    // Проверяем, что карточки появились
    const { getByTestId, getAllByTestId } = render(<UserForms />);

    const addDataAndSubmit = (i: number) => {
      fireEvent.change(getByTestId('name'), { target: { value: 'Moris' } });
      fireEvent.change(getByTestId('birthday'), { target: { value: '2012-10-04' } });
      fireEvent.change(getByTestId('e-mail'), { target: { value: `moris${i}@mail.ru` } });
      fireEvent.change(getByTestId('enLvl'), { target: { value: 'a2' } });
      fireEvent.change(getByTestId('file'), {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      });
      fireEvent.change(getByTestId('PDAgreement'), { target: { checked: true } });

      fireEvent.click(getByTestId('user-form/submit-btn'));
    };

    const countOfCards = 5;
    for (let i = 0; i < countOfCards; i++) {
      addDataAndSubmit(i);
    }
    expect(getAllByTestId('pages/user-card').length).toEqual(countOfCards);
  });
});
