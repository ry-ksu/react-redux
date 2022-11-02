import React, { useState } from 'react';

import { UserFields as UserFields } from '../userFields';
import { UserCards } from '../userCards';
import { Modal } from '../modal';
import { useGlobalContext } from '../App';
import { UserFormModalContent } from '../modal/userFormModalContent';

import { UserProps } from '../../types';

export const UserForms = () => {
  const { userDispatch } = useGlobalContext();
  const [modalActive, setModalActive] = useState(false);

  const status = 'modal_user-form';

  const handleSubmit = (card: UserProps) => {
    setModalActive(true);
    userDispatch({
      type: 'add',
      payload: card,
    });
  };
  const handleOnClickModal = () => {
    setModalActive(false);
  };

  return (
    <div data-testid="pages/user-form">
      <UserFields onSubmit={handleSubmit} />
      <UserCards />
      {modalActive && (
        <Modal status={status} onClick={handleOnClickModal} content={UserFormModalContent} />
      )}
    </div>
  );
};
