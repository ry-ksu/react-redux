import React, { useState } from 'react';
import { Forms } from 'components/forms';
import { UserCards } from 'components/userCards';
import { Modal } from '../modal';
import { UserProps, userList } from '../../data/usersList';

export const UserForms = () => {
  const [userCardsUpdate, setUserCardsUpdate] = useState(userList);
  const [modalActive, setModalActive] = useState(false);

  const handleSubmit = (card: UserProps) => {
    setModalActive(true);
    setUserCardsUpdate([...userCardsUpdate, card]);
  };

  const handleOnClickModal = () => {
    setModalActive(false);
  };

  const modalContent = <p className="content">Данные успешно добавлены!</p>;

  return (
    <div data-testid="pages/user-form">
      <Forms onSubmit={handleSubmit} />
      <UserCards cards={userCardsUpdate} />
      <Modal active={modalActive} onClick={handleOnClickModal} content={modalContent} />
    </div>
  );
};
