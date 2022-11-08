import React from 'react';
import { useForm } from 'react-hook-form';
import { CHANGE_PAGE, CHANGE_PAGE_SIZE, CHANGE_ORDERING } from 'reducer';
import { useGlobalContext } from '../App';
import styles from './index.module.css';

type IData = {
  page: string;
  pageSize: string;
  ordering: string;
};

export const GameList__header = () => {
  const { gamesState, gameDispatch } = useGlobalContext();
  let pageCount: string;

  if (isNaN(Number(gamesState.count))) {
    pageCount = gamesState.count;
  } else {
    pageCount = String(Math.ceil(Number(gamesState.count) / Number(gamesState.pageSize)));
  }

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      page: gamesState.page,
      pageSize: gamesState.pageSize,
      ordering: gamesState.ordering,
    },
  });

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (errors[name as keyof IData]) {
      return;
    }

    const {
      target: { value: inputValue },
    } = e;

    if (name === 'page') {
      gameDispatch({
        type: CHANGE_PAGE,
        payload: { ...gamesState, page: inputValue },
      });
    } else if (name === 'pageSize') {
      gameDispatch({
        type: CHANGE_PAGE_SIZE,
        payload: { ...gamesState, pageSize: inputValue },
      });
    } else if (name === 'ordering') {
      gameDispatch({
        type: CHANGE_ORDERING,
        payload: { ...gamesState, ordering: inputValue },
      });
    }
  };

  return (
    <form className={styles['form']}>
      <label className={styles['form__label']}>
        Page number:
        <input
          className={styles['form__input_page']}
          data-testid="page"
          type="number"
          {...register('page', {
            onBlur: (e) => changeForm(e),
            required: 'Page is required',
            min: {
              value: 1,
              message: 'Minimum is 1',
            },
            max: {
              value: Number(pageCount) || 1,
              message: `Maximum is 'Total pages' or 1`,
            },
            validate: {
              value: (value) => Number(value) % 1 === 0 || 'It will be integer',
            },
          })}
        />
        <p className="error">{errors.page && String(errors.page.message)}</p>
      </label>

      <label>
        Page size:
        <input
          data-testid="pageSize"
          type="number"
          {...register('pageSize', {
            onBlur: (e) => changeForm(e),
            required: 'Page size is required',
            min: {
              value: 1,
              message: 'Minimum is 1',
            },
            max: {
              value: 40,
              message: 'Maximum is 40',
            },
            validate: {
              value: (value) => Number(value) % 1 === 0 || 'It will be integer',
            },
          })}
        />
        <p className="error">{errors.pageSize && String(errors.pageSize.message)}</p>
      </label>

      <label>
        Sorting:
        <select
          data-testid="ordering"
          {...register('ordering', {
            onChange: (e) => changeForm(e),
          })}
        >
          <option value="-rating">Rating ↓</option>
          <option value="rating">Rating ↑</option>
          <option value="-name">Name ↓</option>
          <option value="name">Name ↑</option>
          <option value="-released">Released ↓</option>
          <option value="released">Released ↑</option>
        </select>
      </label>

      <p>Total pages: {pageCount}</p>
    </form>
  );
};
