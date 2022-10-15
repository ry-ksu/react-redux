import React from 'react';
import { UserProps } from 'types';
import style from './index.module.css';

type UserCardProps = {
  cards: UserProps[];
};

export const UserCards = (props: UserCardProps) => {
  return (
    <div className={style.userCardsWrapper}>
      {props.cards.map((user) => (
        <div
          data-testid="pages/user-card"
          className={style.userCard}
          key={user.eMail + user.birthday}
        >
          <img src={user.file} />
          <div className={style.content}>
            <h3>
              {user.name} ({user.sex})
            </h3>
            <h5>
              Почта: <strong>{user.eMail}</strong>
            </h5>
            <h5>
              Дата рождения: <strong>{user.birthday}</strong>
            </h5>
            <h5>
              Уровень английского: <strong>{user.enLvl.toUpperCase()}</strong>
            </h5>
            <h4>
              Согласие на обработку ПД: <strong>ДА</strong>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};
