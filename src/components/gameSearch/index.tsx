import React from 'react';
import { axiosGet } from 'services';
import { IGame } from 'types';
import { useGlobalContext } from 'components/App';

import styles from './index.module.css';

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
    console.log(gamesState.newSearchValue !== gamesState.oldSearchValue);
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
    console.log(result.count);
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputValue },
    } = e;
    gameDispatch({
      type: 'search',
      payload: {
        newSearchValue: inputValue,
        oldSearchValue: gamesState.oldSearchValue,
        gamesCards: gamesState.gamesCards,
        ordering: gamesState.ordering,
        page: gamesState.page,
        pageSize: gamesState.pageSize,
        count: gamesState.count,
        chosenGame: gamesState.chosenGame,
        isLoaded: gamesState.isLoaded,
      },
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
