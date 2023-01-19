// Library
import React from 'react';
// Styles
import styles from './index.module.css';
// Other
import { fetchUsers, changeSearchWord } from 'store/searchSlice';
import { useAppSelector, useAppDispatch } from 'hook';

export const GameSearch = () => {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state) => state.search);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchUsers());
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputValue },
    } = e;
    dispatch(changeSearchWord({ newSearchValue: inputValue }));
  };

  return (
    <>
      <h1 className={styles.pageName}>Games</h1>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <button data-testid="games/search-btn"></button>
          <input
            data-testid="games/search"
            type="search"
            value={gameState.newSearchValue}
            placeholder="Search games..."
            onChange={changeInput}
          />
        </form>
      </div>
    </>
  );
};
