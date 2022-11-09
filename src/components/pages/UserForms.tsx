import React, { useState } from 'react';

import { UserFields as UserFields } from '../userFields';
import { UserCards } from '../userCards';
import { Modal } from '../modal';
import { UserFormModalContent } from '../modal/userFormModalContent';

import { UserProps } from '../../types';
import { useAppDispatch } from 'hook';
import { addUser } from 'store/userSlice';

export const UserForms = () => {
  const dispatch = useAppDispatch();
  const [modalActive, setModalActive] = useState(false);

  const status = 'modal_user-form';

  const handleSubmit = (card: UserProps) => {
    setModalActive(true);
    dispatch(addUser(card));
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
