import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const onSubmit = (gamesCards: IGame[], page: string, count: string) => {
    gameDispatch({
      type: 'search',
      payload: {
        newSearchValue: gamesState.newSearchValue,
        oldSearchValue: gamesState.newSearchValue,
        gamesCards,
        ordering: gamesState.ordering,
        page: page,
        pageSize: gamesState.pageSize,
        count: count,
        chosenGame: null,
        isLoaded: 'loaded',
      },
    });
  };

  const loading = () => {
    gameDispatch({
      type: 'loading',
      payload: {
        newSearchValue: gamesState.newSearchValue,
        oldSearchValue: gamesState.oldSearchValue,
        gamesCards: gamesState.gamesCards,
        ordering: gamesState.ordering,
        page: gamesState.page,
        pageSize: gamesState.pageSize,
        count: gamesState.count,
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
        newSearchValue: gamesState.newSearchValue,
        oldSearchValue: gamesState.oldSearchValue,
        gamesCards: gamesState.gamesCards,
        ordering: gamesState.ordering,
        page: gamesState.page,
        pageSize: gamesState.pageSize,
        count: gamesState.count,
        chosenGame: gamesState.gamesCards[cardIndex],
        isLoaded: 'loaded',
      },
    });
    navigate(`game/${gamesState.chosenGame?.id}`);
  };

  return (
    <div data-testid="pages/games">
      <GameSearch loading={loading} onSubmit={onSubmit} />
      <GameList onClick={onClickCard} />
      {modalActive && <Modal status={status} onClick={onClickModalLayout} content={GameCard} />}
    </div>
  );
};
