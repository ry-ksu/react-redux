// Library
import React from 'react';
// Components
import { useGlobalContext } from 'components/App';
// Styles
import styles from './index.module.css';
// Other
import { CHANGE_SEARCH_WORD } from 'reducer';
import { axiosGet } from 'services';
import { IGame } from 'types';

type ISearchProp = {
  loading: () => void;
  onSubmit: (game: IGame[], page: string, count: string) => void;
};

export const GameSearch = (prop: ISearchProp) => {
  const { gamesState, gameDispatch } = useGlobalContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    prop.onSubmit([], gamesState.page, '0');
    prop.loading();

    let page = gamesState.page;

    if (gamesState.newSearchValue !== gamesState.oldSearchValue) {
      page = '1';
    }

    const result = await axiosGet(
      gamesState.newSearchValue,
      page,
      gamesState.pageSize,
      gamesState.ordering
    );
    if (!result) {
      prop.onSubmit([], '1', '0');
      return;
    }
    prop.onSubmit(result.results, page, result.count);
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputValue },
    } = e;
    gameDispatch({
      type: CHANGE_SEARCH_WORD,
      payload: { ...gamesState, newSearchValue: inputValue },
    });
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
            value={gamesState.newSearchValue}
            placeholder="Search games..."
            onChange={changeInput}
          />
        </form>
      </div>
    </>
  );
};
