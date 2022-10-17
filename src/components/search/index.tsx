import React, { useState } from 'react';
import { axiosGet } from 'services/api';
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
    console.log(55);
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
          <button></button>
          <input
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
