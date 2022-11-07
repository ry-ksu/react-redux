// Library
import React from 'react';
// Components
import { Loader } from '../loader';
import { useGlobalContext } from '../App';
import { GameWarning } from '../gameWarning';
import { GameList__header } from '../gameList__header/gameList__header';
import { GameCards } from '../gameCards';
// Styles
import styles from './index.module.css';

type IGameListProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const GameList = (prop: IGameListProps) => {
  const { gamesState } = useGlobalContext();

  const firstSearch = 'Please enter a request...';
  const notData = 'No games have been created for this query yet. Try another request.';
  let content: JSX.Element | null;

  if (gamesState.isLoaded === 'NOT_LOADED') {
    content = GameWarning(firstSearch);
  } else if (gamesState.isLoaded === 'LOADED' && gamesState.gamesCards.length === 0) {
    content = GameWarning(notData);
  } else if (gamesState.gamesCards.length != 0) {
    content = <GameCards onClick={prop.onClick} />;
  } else {
    content = null;
  }

  return (
    <div className={styles['game-list']}>
      <div className={styles['game-list-wrapper']}>
        <div className={styles['game-list__header']}>
          <GameList__header />
        </div>
        <div className={styles['game-list__content']}>{content}</div>
        <Loader isLoading={gamesState.isLoaded} />
      </div>
    </div>
  );
};
