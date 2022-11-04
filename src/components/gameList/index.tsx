import React from 'react';

import { Loader } from '../loader';
import { useGlobalContext } from '../App';
import { GameWarning } from '../gameWarning';
import { GameList__header } from '../gameList__header/gameList__header';

import styles from './index.module.css';
import { GameCards } from 'components/gameCards';

type IGameListProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const GameList = (prop: IGameListProps) => {
  const { gamesState } = useGlobalContext();

  const firstSearch = 'Please enter a request...';
  const notData = 'No games have been created for this query yet. Try another request.';
  let content: JSX.Element | null;

  if (gamesState.isLoaded === 'not loaded') {
    content = GameWarning(firstSearch);
  } else if (gamesState.isLoaded === 'loaded' && gamesState.gamesCards.length === 0) {
    content = GameWarning(notData);
  } else if (gamesState.gamesCards.length != 0) {
    content = <GameCards onClick={prop.onClick} />;
  } else {
    content = null;
  }

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.gamesCards}>
        <GameList__header />
        {content}
      </div>
      <Loader isLoading={gamesState.isLoaded} />
    </div>
  );
};
