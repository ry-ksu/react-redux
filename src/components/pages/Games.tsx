// Library
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { GameSearch } from '../gameSearch';
import { GameList } from '../gameList';
import { Modal } from '../modal';
// import { useGlobalContext } from '../App';
import { GameCard } from '../gameCard';
// Other
import { IGame } from '../../types';
// import { CHOSE_GAME, CHANGE_LOADING, ADD_NEW_CARDS } from 'reducer';
import { choseGame, changeLoading, addNewGames } from 'store/searchSlice';
import { useAppDispatch, useAppSelector } from 'hook';

export const Games = () => {
  const games = useAppSelector((state) => state.search.gamesCards);
  const chosenGame = useAppSelector((state) => state.search.chosenGame);
  const dispatch = useAppDispatch();
  // const { gamesState, gameDispatch } = useGlobalContext();
  const [modalActive, setModalActive] = useState(false);

  const status = 'game';
  const navigate = useNavigate();

  const onSubmit = (gamesCards: IGame[], isLoaded: string) => {
    dispatch(addNewGames({ gamesCards, isLoaded }));
    // gameDispatch({
    //   type: ADD_NEW_CARDS,
    //   payload: { ...gamesState, gamesCards, isLoaded },
    // });
  };

  const loading = () => {
    dispatch(changeLoading({ isLoaded: 'LOADING' }));
    // gameDispatch({
    //   type: CHANGE_LOADING,
    //   payload: { ...gamesState, isLoaded: 'LOADING' },
    // });
  };

  const onClickModalLayout = () => {
    setModalActive(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardIndex = Number(e.currentTarget.classList[1]);
    dispatch(choseGame({ chosenGame: games[cardIndex] }));
    // gameDispatch({
    //   type: CHOSE_GAME,
    //   payload: { ...gamesState, chosenGame: gamesState.gamesCards![cardIndex] },
    // });
    navigate(`game/${chosenGame?.id}`);
  };

  return (
    <div data-testid="pages/games">
      <GameSearch loading={loading} onSubmit={onSubmit} />
      <GameList onClick={onClickCard} />
      {modalActive && <Modal status={status} onClick={onClickModalLayout} content={GameCard} />}
    </div>
  );
};
