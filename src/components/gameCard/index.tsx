import React from 'react';
import { useGlobalContext } from 'components/App';


export const GameCard = () => {
  const { gamesState } = useGlobalContext();

  if (gamesState.chosenGame == null) {
    return <p>Объект не определен</p>;
  }
  return (
    <div className="game-card">
      <div className="game-card__content_left">
        <img src={gamesState.chosenGame.background_image} alt="game image"></img>
        <p className="game-card__source">{gamesState.chosenGame.rating}</p>
      </div>
      <div className="game-card__content_right">
        <h2 className="game-card__header">{gamesState.chosenGame.name}</h2>
        <p className="game-card__years-cancel">
          {(gamesState.chosenGame.esrb_rating != null &&
            gamesState.chosenGame.esrb_rating.name_ru) ||
            'Нет ограничений по возрасту'}
        </p>
        <p className="game-card__date">
          Дата релиза: {new Date(gamesState.chosenGame.released).toLocaleString().slice(0, -10)}
        </p>
        <ul className="game-card__genres">
          {gamesState.chosenGame.genres.map((game) => {
            return <li key={game.id}>{game.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
