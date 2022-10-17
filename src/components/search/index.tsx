import React, { useState } from 'react';
import { axiosGet } from 'services';
import { IArticles } from 'types';

import styles from './index.module.css';

type ISearchProp = {
  loading: () => void;
  onSubmit: (article: IArticles[]) => void;
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
    prop.onSubmit(result.articles);
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputValue },
    } = e;
    setInputValue(inputValue);
  };

  return (
    <>
      <h1 className={styles.pageName}>News</h1>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <button data-testid="news/search-btn"></button>
          <input
            data-testid="news/search"
            type="search"
            value={inputValue}
            placeholder="Search news..."
            onChange={changeInput}
          />
        </form>
      </div>
    </>
  );
};
