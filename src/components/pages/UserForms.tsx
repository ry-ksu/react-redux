import React, { useState } from 'react';
import { Forms } from 'components/forms';
// import { UserCards } from 'components/userCards';
import { Modal } from '../modal';
import { UserProps, userList } from '../../data/usersList';

export const UserForms = () => {
  const [userCardsUpdate, setUserCardsUpdate] = useState(userList);
  const [modalActive, setModalActive] = useState(false);

  const handlerChangeUserList = (list: UserProps[], item: UserProps) => {
    list.push(item);
    setUserCardsUpdate(list);
  };

  const modalContent = <p className="content">Данные успешно добавлены!</p>;

  return (
    <div data-testid="pages/user-form">
      <Forms
        cards={userCardsUpdate}
        changeUserList={handlerChangeUserList}
        setModalActive={setModalActive}
      />
      {/* <UserCards cards={userCardsUpdate} /> */}
      <Modal active={modalActive} setActive={setModalActive} content={modalContent} />
    </div>
  );
};
