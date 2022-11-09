import React from 'react';
// import { useGlobalContext } from '../App';
import { useAppSelector } from 'hook';
import styles from './index.module.css';

type IAPICards = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const GameCards = (prop: IAPICards) => {
  const games = useAppSelector((state) => state.search.gamesCards);
  // const { gamesState } = useGlobalContext();

  return (
    <div className={styles['card-list']}>
      {games.map((game, i) => (
        <div
          data-testid="games/card"
          key={i}
          onClick={(e) => prop.onClick(e)}
          className={styles.gamesCard + ' ' + i}
        >
          <div className={styles.imgWrapper}>
            <img src={game.background_image} alt="game image" />
          </div>
          <div className={styles.gameRating}>{game.rating}</div>
          <div className={styles.gameContent}>
            <h3>{game.name}</h3>
            <p className={styles.gameReleased}>
              Дата релиза: {new Date(game.released).toLocaleString().slice(0, -10)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
