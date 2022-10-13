import { useState } from 'react';
import * as React from 'react';
import { render, fireEvent, getByText, getByRole } from '@testing-library/react';
import { Forms } from '.';
import { UserProps, userList } from '../../data/usersList';
import userEvent from '@testing-library/user-event';

const Mock = () => {
  const [userCardsUpdate, setUserCardsUpdate] = useState(userList);
  const [modalActive, setModalActive] = useState(false);
  const handlerChangeUserList = (list: UserProps[], item: UserProps) => {
    list.push(item);
    setUserCardsUpdate(list);
  };

  return { userCardsUpdate, handlerChangeUserList, setModalActive };
};

const setState = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStateMock: any = (initState: any) => [initState, setState];

describe('Forms component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('render Forms', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const { getByTestId, queryByText } = render(
      <Forms
        cards={Mock().userCardsUpdate}
        changeUserList={Mock().handlerChangeUserList}
        setModalActive={Mock().setModalActive}
      />
    );

    expect(getByTestId('user-form')).toBeInTheDocument();
  });

  test('submit disabled', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const { getByTestId, queryByText } = render(
      <Forms
        cards={Mock().userCardsUpdate}
        changeUserList={Mock().handlerChangeUserList}
        setModalActive={Mock().setModalActive}
      />
    );

    expect(getByTestId('user-form')).toBeInTheDocument();
    fireEvent.click(getByTestId('user-form__submit-btn'));
    expect(queryByText(/Имя не может/)).not.toBeInTheDocument();
  });

  test('submit disabled', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const { getByTestId, getByText, getByRole } = render(
      <Forms
        cards={Mock().userCardsUpdate}
        changeUserList={Mock().handlerChangeUserList}
        setModalActive={Mock().setModalActive}
      />
    );

    expect(getByTestId('user-form')).toBeInTheDocument();
    // fireEvent.change(getByTestId('name'), { target: { value: '5' } });
    userEvent.type(getByTestId('name'), 'f');
    expect(getByTestId('name')).toHaveValue('f');
    fireEvent.click(getByTestId('user-form__submit-btn'));
    // expect(getByText(/Имя не может/)).toBeInTheDocument();
  });
});
