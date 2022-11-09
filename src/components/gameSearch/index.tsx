// Library
import React from 'react';
// Components
// import { useGlobalContext } from 'components/App';
// Styles
import styles from './index.module.css';
// Other
// import { CHANGE_COUNT, CHANGE_SEARCH_WORD } from 'reducer';
import { changeCount, changeSearchWord } from 'store/searchSlice';
import { useAppSelector } from 'hook';
import { useAppDispatch } from 'hook';
import { axiosGet } from 'services';
import { IGame } from 'types';

type ISearchProp = {
  loading: () => void;
  onSubmit: (game: IGame[], isLoaded: string) => void;
};

export const GameSearch = (prop: ISearchProp) => {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state) => state.search);
  // const { gamesState: gamesState2, gameDispatch } = useGlobalContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    prop.onSubmit([], 'NOT_LOADED');
    prop.loading();

    const result = await axiosGet(
      gameState.newSearchValue,
      gameState.page,
      gameState.pageSize,
      gameState.ordering
    );
    if (!result) {
      prop.onSubmit([], 'LOADED');
      return;
    }
    prop.onSubmit(result.results, 'LOADED');
    dispatch(changeCount({ count: result.count }));
    // gameDispatch({
    //   type: CHANGE_COUNT,
    //   payload: { ...gamesState2, count: result.count },
    // });
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputValue },
    } = e;
    dispatch(changeSearchWord({ newSearchValue: inputValue }));
    // gameDispatch({
    //   type: CHANGE_SEARCH_WORD,
    //   payload: { ...gamesState2, newSearchValue: inputValue },
    // });
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
