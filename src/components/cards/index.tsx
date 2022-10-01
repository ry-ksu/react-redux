import React from 'react';
import { GameProps } from '../gameList';

export const Cards: React.FC<{ gameList: GameProps[] }> = ({ gameList }) => {
  return (
    <div className="cards">
      {gameList.map((game) => (
        <div className="card" key={game.key}>
          <div className="card__img">{game.img}</div>
          <h3 className="card__title">{game.title}</h3>
          <h4 className="card__description">{game.description}</h4>
          <h4 className="creator">{game.creator}</h4>
          <h5 className="card__year">{game.year}</h5>
          <div className="card__rating">{game.rating}</div>
        </div>
      ))}
    </div>
  );
};
