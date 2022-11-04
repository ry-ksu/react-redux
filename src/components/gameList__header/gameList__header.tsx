import React from 'react';
import { useForm } from 'react-hook-form';

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
    console.log('value', inputValue);
    if (name === 'page') {
      gameDispatch({
        type: 'search',
        payload: {
          newSearchValue: gamesState.newSearchValue,
          oldSearchValue: gamesState.oldSearchValue,
          gamesCards: gamesState.gamesCards,
          ordering: gamesState.ordering,
          page: inputValue,
          pageSize: gamesState.pageSize,
          count: gamesState.count,
          chosenGame: gamesState.chosenGame,
          isLoaded: gamesState.isLoaded,
        },
      });
    } else if (name === 'pageSize') {
      gameDispatch({
        type: 'search',
        payload: {
          newSearchValue: gamesState.newSearchValue,
          oldSearchValue: gamesState.oldSearchValue,
          gamesCards: gamesState.gamesCards,
          ordering: gamesState.ordering,
          page: gamesState.page,
          pageSize: inputValue,
          count: gamesState.count,
          chosenGame: gamesState.chosenGame,
          isLoaded: gamesState.isLoaded,
        },
      });
    } else if (name === 'ordering') {
      gameDispatch({
        type: 'search',
        payload: {
          newSearchValue: gamesState.newSearchValue,
          oldSearchValue: gamesState.oldSearchValue,
          gamesCards: gamesState.gamesCards,
          ordering: inputValue,
          page: gamesState.page,
          pageSize: gamesState.pageSize,
          count: gamesState.count,
          chosenGame: gamesState.chosenGame,
          isLoaded: gamesState.isLoaded,
        },
      });
    }
  };

  return (
    <div className={styles['game-list__header']}>
      <form>
        <label>
          Page number:
          <input
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
      </form>

      <p>Total pages: {pageCount}</p>
    </div>
  );
};
