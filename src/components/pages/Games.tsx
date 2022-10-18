import React, { useState } from 'react';
import { Search } from 'components/search';
import { IGame } from 'types';
import { APICards } from 'components/APICards';
import { Modal } from 'components/modal';

export const Games = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [dataIsLoad, setDataIsLoad] = useState(1);
  const [gameActive, setGameActive] = useState<IGame>();

  const status = 'game';

  const cardContent = () => {
    if (gameActive == null) {
      return <p>Объект не определен</p>;
    }
    return (
      <div className="game-card">
        <div className="game-card__content_left">
          <img src={gameActive.background_image} alt="game image"></img>
          <p className="game-card__source">{gameActive.rating}</p>
        </div>
        <div className="game-card__content_right">
          <h2 className="game-card__header">{gameActive.name}</h2>
          <p className="game-card__years-cancel">
            {(gameActive.esrb_rating != null && gameActive.esrb_rating.name_ru) ||
              'Нет ограничений по возрасту'}
          </p>
          <p className="game-card__date">
            Дата релиза: {new Date(gameActive.released).toLocaleString().slice(0, -10)}
          </p>
          <ul className="game-card__genres">
            {gameActive.genres.map((game) => {
              return <li key={game.id}>{game.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  };

  const onSubmit = (newGames: IGame[]) => {
    setGames(newGames);
    setDataIsLoad(3);
  };

  const loading = () => {
    setDataIsLoad(2);
  };

  const onClick = () => {
    setModalActive(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardIndex = Number(e.currentTarget.classList[1]);
    setGameActive(games[cardIndex]);
    setModalActive(true);
  };

  return (
    <div data-testid="pages/games">
      <Search loading={loading} onSubmit={onSubmit} />
      <APICards isLoad={dataIsLoad} games={games} onClick={onClickCard} />
      <Modal status={status} active={modalActive} onClick={onClick} content={cardContent} />
    </div>
  );
};
