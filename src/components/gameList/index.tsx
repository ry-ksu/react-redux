import React from 'react';

import { Loader } from '../loader';
import { useGlobalContext } from '../App';
import { GameWarning } from '../gameWarning';

import styles from './index.module.css';
import { GameCards } from 'components/gameCards';

type IAPICards = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const GameList = (prop: IAPICards) => {
  const { gamesState } = useGlobalContext();

  const firstSearch = 'Please enter a request...';
  const notData = 'No games have been created for this query yet. Try another request.';
  let content: JSX.Element;

  if (gamesState.isLoaded === 'not loaded') {
    content = GameWarning(firstSearch);
  } else if (gamesState.isLoaded === 'loaded' && gamesState.gamesCards.length === 0) {
    content = GameWarning(notData);
  } else {
    content = GameCards(prop);
  }

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.gamesCards}> {content} </div>
      <Loader isLoading={gamesState.isLoaded} />
    </div>
  );
};
