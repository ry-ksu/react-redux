import React from 'react';
import { UserProps } from 'data/usersList';

type UserCardProps = {
  cards: UserProps[];
};

export const UserCards = (props: UserCardProps) => {
  return (
    <div>
      {props.cards.map((user) => (
        <div key={user.eMail + user.birthday}>
          <img src={user.file} />
          <div>
            Имя: <strong>{user.name}</strong> ({user.sex})
          </div>
          <div>
            Почта: <strong>{user.eMail}</strong>
          </div>
          <div>
            Дата рождения: <strong>{user.birthday}</strong>
          </div>
          <div>
            Уровень английского: <strong>{user.enLvl.toUpperCase()}</strong>
          </div>
          <div>
            Согласие на обработку ПД: <strong>ДА</strong>
          </div>
        </div>
      ))}
    </div>
  );
};
