import React from 'react';
import style from './index.module.css';
import { useGlobalContext } from 'components/App';

export const UserCards = () => {
  const { userState } = useGlobalContext();

  return (
    <div className={style.userCardsWrapper}>
      {userState.userCards.map((user) => (
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
