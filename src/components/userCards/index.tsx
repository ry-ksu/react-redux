import React from 'react';
import style from './index.module.css';
import { useAppSelector } from 'hook';

export const UserCards = () => {
  const users = useAppSelector((state) => state.user.users);

  return (
    <div className={style.userCardsWrapper}>
      {users.map((user) => (
        <div
          data-testid="pages/user-card"
          className={style.userCard}
          key={user.eMail + user.birthday}
        >
          <img src={user.file} />
          <div className={style.content}>
            <h3>
              {user.name} ({user.gender})
            </h3>
            <h5>
              E-mail: <strong>{user.eMail}</strong>
            </h5>
            <h5>
              Date of Birthday: <strong>{user.birthday}</strong>
            </h5>
            <h5>
              English level: <strong>{user.enLvl.toUpperCase()}</strong>
            </h5>
            <h4>
              PD agreement: <strong>YES</strong>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};
