// Library
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { GameSearch } from '../gameSearch';
import { GameList } from '../gameList';
import { Modal } from '../modal';
import { GameCard } from '../gameCard';
// Other
import { choseGame } from 'store/searchSlice';
import { useAppDispatch, useAppSelector } from 'hook';

export const Games = () => {
  const games = useAppSelector((state) => state.search.gamesCards);
  const chosenGame = useAppSelector((state) => state.search.chosenGame);
  const dispatch = useAppDispatch();
  const [modalActive, setModalActive] = useState(false);

  const status = 'game';
  const navigate = useNavigate();

  const onClickModalLayout = () => {
    setModalActive(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardIndex = Number(e.currentTarget.classList[1]);
    dispatch(choseGame({ chosenGame: games[cardIndex] }));
    navigate(`game/${chosenGame?.id}`);
  };

  return (
    <div data-testid="pages/games">
      <GameSearch />
      <GameList onClick={onClickCard} />
      {modalActive && <Modal status={status} onClick={onClickModalLayout} content={GameCard} />}
    </div>
  );
};
