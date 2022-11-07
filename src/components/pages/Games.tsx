// Library
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { GameSearch } from '../gameSearch';
import { GameList } from '../gameList';
import { Modal } from '../modal';
import { useGlobalContext } from '../App';
import { GameCard } from '../gameCard';
// Other
import { IGame } from '../../types';
import { CHOSE_GAME, CHANGE_LOADING, ADD_NEW_CARDS } from 'reducer';

export const Games = () => {
  const { gamesState, gameDispatch } = useGlobalContext();
  const [modalActive, setModalActive] = useState(false);

  const status = 'game';
  const navigate = useNavigate();

  const onSubmit = (gamesCards: IGame[], page: string, count: string) => {
    gameDispatch({
      type: ADD_NEW_CARDS,
      payload: Object.assign({}, gamesState, {
        page,
        count,
        gamesCards,
      }),
    });
  };

  const loading = () => {
    gameDispatch({
      type: CHANGE_LOADING,
      payload: Object.assign({}, gamesState, {
        isLoaded: 'LOADING',
      }),
    });
  };

  const onClickModalLayout = () => {
    setModalActive(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardIndex = Number(e.currentTarget.classList[1]);
    gameDispatch({
      type: CHOSE_GAME,
      payload: Object.assign({}, gamesState, {
        chosenGame: gamesState.gamesCards![cardIndex],
      }),
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
