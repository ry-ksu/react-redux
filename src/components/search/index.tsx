import React, { useState } from 'react';
import { axiosGet } from 'services';
import { IGame } from 'types';

import styles from './index.module.css';

type ISearchProp = {
  loading: () => void;
  onSubmit: (game: IGame[]) => void;
};

export const Search = (prop: ISearchProp) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    prop.onSubmit([]);
    prop.loading();
    const result = await axiosGet(inputValue);
    if (!result) {
      prop.onSubmit([]);
      return;
    }
    prop.onSubmit(result.results);
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputValue },
    } = e;
    setInputValue(inputValue);
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
            value={inputValue}
            placeholder="Search games..."
            onChange={changeInput}
          />
        </form>
      </div>
    </>
  );
};
