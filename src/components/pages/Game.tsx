import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameCard } from 'components/gameCard';
import styles from './game.module.css';

export const Game = () => {
  const navigate = useNavigate();

  return (
    <>
      <div data-testid="pages/game">
        <h1 className={styles['page-name']}>Game</h1>
        <div className={styles['game__back-btn-wrapper']}>
          <div className={styles['game__back-btn-container']}>
            <button className={styles['game__back-btn']} onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
        <div className={styles['game__card-wrapper']}>
          <GameCard />
        </div>
      </div>
    </>
  );
};
