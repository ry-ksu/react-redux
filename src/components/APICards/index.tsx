import React from 'react';
import { IGame } from 'types';
import { Loader } from 'components/loader';
import styles from './index.module.css';

type IAPICards = {
  isLoad: number;
  games: IGame[];
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const APICards = (prop: IAPICards) => {
  const firstSearch = 'Пожалуйста, введите запрос...';
  const notData = 'Игры по данному запросу еще не созданы. Попробуйте другой запрос.';

  const warningForSearch = (warning: string) => {
    return (
      <div className={styles.warning}>
        <p>{warning}</p>
      </div>
    );
  };

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.gamesCards}>
        {prop.isLoad === 1 && warningForSearch(firstSearch)}
        {prop.isLoad === 3 && prop.games.length === 0 && warningForSearch(notData)}

        {prop.games.map((game, i) => (
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
      <Loader isLoading={prop.isLoad} />
    </div>
  );
};
