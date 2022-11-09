import React from 'react';
import { useForm } from 'react-hook-form';
// import { CHANGE_PAGE, CHANGE_PAGE_SIZE, CHANGE_ORDERING } from 'reducer';
// import { useGlobalContext } from '../App';
import { useAppDispatch, useAppSelector } from 'hook';
import { changePage, changePageSize, changeOrdering } from 'store/searchSlice';
import styles from './index.module.css';

export const GameList__header = () => {
  const gameState = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  // const { gamesState, gameDispatch } = useGlobalContext();
  const pageCount = String(Math.ceil(Number(gameState.count) / Number(gameState.pageSize)));

  const { register } = useForm({
    mode: 'onChange',
    defaultValues: {
      page: gameState.page,
      pageSize: gameState.pageSize,
      ordering: gameState.ordering,
    },
  });

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    const {
      target: { value: inputValue },
    } = e;

    if (name === 'page') {
      dispatch(changePage({ page: inputValue }));
      // gameDispatch({
      //   type: CHANGE_PAGE,
      //   payload: { ...gamesState, page: inputValue },
      // });
    } else if (name === 'pageSize') {
      dispatch(changePageSize({ pageSize: inputValue }));
      // gameDispatch({
      //   type: CHANGE_PAGE_SIZE,
      //   payload: { ...gamesState, pageSize: inputValue },
      // });
    } else if (name === 'ordering') {
      dispatch(changeOrdering({ ordering: inputValue }));
      // gameDispatch({
      //   type: CHANGE_ORDERING,
      //   payload: { ...gamesState, ordering: inputValue },
      // });
    }
  };

  const pages = [];
  for (let i = 1; i <= Number(pageCount); i++) {
    pages.push(i);
  }

  const pageSize = [];
  for (let i = 1; i <= 40; i++) {
    pageSize.push(i);
  }

  return (
    <form className={styles['form']}>
      <label className={styles['form__label']}>
        Page number:
        <select
          className={styles['form__input_page']}
          data-testid="page"
          {...register('page', {
            onChange: (e) => changeForm(e),
          })}
        >
          {pages.map((page) => {
            return (
              <option key={page} value={page}>
                {page}
              </option>
            );
          })}
        </select>
      </label>

      <label>
        Page size:
        <select
          className={styles['form__input_pageSize']}
          data-testid="pageSize"
          {...register('pageSize', {
            onChange: (e) => changeForm(e),
          })}
        >
          {pageSize.map((page) => {
            return (
              <option key={page} value={page}>
                {page}
              </option>
            );
          })}
        </select>
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
