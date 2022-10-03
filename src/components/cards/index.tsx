import React from 'react';
import { GameProps } from '../../data/gameList';

import styles from './index.module.css';

export const Cards: React.FC<{ gameList: GameProps[] }> = ({ gameList }) => {
  return (
    <div className={styles.cards}>
      {gameList.map((game) => (
        <div className={styles.card} key={game.key}>
          <div className={`${styles.card__img} ${styles[`card__img_${game.img}`]}`}></div>
          <div className={styles.rating}>{game.rating}</div>
          <div className={styles.content}>
            <h3>{game.title}</h3>
            <h4>{game.creator}</h4>
            <h5>{game.year}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
