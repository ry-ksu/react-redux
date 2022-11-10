import React from 'react';
import { useAppSelector } from 'hook';

export const GameCard = () => {
  const gameState = useAppSelector((state) => state.search);

  if (gameState.chosenGame == null) {
    return <p>Объект не определен</p>;
  }
  return (
    <div className="game-card">
      <div className="game-card__content_left">
        <img src={gameState.chosenGame.background_image} alt="game image"></img>
        <p className="game-card__source">{gameState.chosenGame.rating}</p>
      </div>
      <div className="game-card__content_right">
        <h2 className="game-card__header">{gameState.chosenGame.name}</h2>
        <p className="game-card__years-cancel">
          {(gameState.chosenGame.esrb_rating != null && gameState.chosenGame.esrb_rating.name_ru) ||
            'Нет ограничений по возрасту'}
        </p>
        <p className="game-card__date">
          Дата релиза: {new Date(gameState.chosenGame.released).toLocaleString().slice(0, -10)}
        </p>
        <ul className="game-card__genres">
          {gameState.chosenGame.genres.map((game) => {
            return <li key={game.id}>{game.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
