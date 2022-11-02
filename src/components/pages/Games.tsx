import React, { useState } from 'react';

import { GameSearch } from '../gameSearch';
import { GameList } from '../gameList';
import { Modal } from '../modal';
import { useGlobalContext } from '../App';
import { GameCard } from '../gameCard';

import { IGame } from '../../types';

export const Games = () => {
  const { gamesState, gameDispatch } = useGlobalContext();
  const [modalActive, setModalActive] = useState(false);

  const status = 'game';

  const onSubmit = (gamesCards: IGame[], ordering = '-rating', page = 1, page_size = 15) => {
    gameDispatch({
      type: 'search',
      payload: {
        gamesCards,
        ordering,
        page,
        page_size,
        chosenGame: null,
        isLoaded: 'loaded',
      },
    });
  };

  const loading = () => {
    gameDispatch({
      type: 'loading',
      payload: {
        gamesCards: gamesState.gamesCards,
        ordering: gamesState.ordering,
        page: gamesState.page,
        page_size: gamesState.page_size,
        chosenGame: null,
        isLoaded: 'loading',
      },
    });
  };

  const onClickModalLayout = () => {
    setModalActive(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardIndex = Number(e.currentTarget.classList[1]);
    //! Нужно не передавать все параметры
    gameDispatch({
      type: 'pick game',
      payload: {
        gamesCards: gamesState.gamesCards,
        ordering: gamesState.ordering,
        page: gamesState.page,
        page_size: gamesState.page_size,
        chosenGame: gamesState.gamesCards[cardIndex],
        isLoaded: 'loaded',
      },
    });
    setModalActive(true);
  };

  return (
    <div data-testid="pages/games">
      <GameSearch loading={loading} onSubmit={onSubmit} />
      <GameList onClick={onClickCard} />
      {modalActive && <Modal status={status} onClick={onClickModalLayout} content={GameCard} />}
    </div>
  );
};
