import React, { useState } from 'react';
import { Forms } from 'components/forms';
import { UserCards } from 'components/userCards';
import { Modal } from '../modal';
import { UserProps } from 'types';

export const UserForms = () => {
  const [userCardsUpdate, setUserCardsUpdate] = useState<UserProps[]>([]);
  const [modalActive, setModalActive] = useState(false);

  const status = 'form-info';

  const handleSubmit = (card: UserProps) => {
    setModalActive(true);
    setUserCardsUpdate([...userCardsUpdate, card]);
  };

  const handleOnClickModal = () => {
    setModalActive(false);
  };

  const modalContent = () => {
    return <p className="content">Data added successfully!</p>;
  };

  return (
    <div data-testid="pages/user-form">
      <Forms onSubmit={handleSubmit} />
      <UserCards cards={userCardsUpdate} />
      {modalActive && <Modal status={status} onClick={handleOnClickModal} content={modalContent} />}
    </div>
  );
};
