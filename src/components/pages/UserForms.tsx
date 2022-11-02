import React, { useState } from 'react';
import { Forms } from 'components/forms';
import { UserCards } from 'components/userCards';
import { Modal } from '../modal';
import { UserProps } from 'types';
import { useGlobalContext } from 'components/App';
import { UserFormModalContent } from 'components/modal/userFormModalContent';

export const UserForms = () => {
  const { dispatch } = useGlobalContext();
  const [modalActive, setModalActive] = useState(false);

  const status = 'modal_user-form';

  const handleSubmit = (card: UserProps) => {
    setModalActive(true);
    dispatch({
      type: 'add',
      payload: card,
    });
  };
  const handleOnClickModal = () => {
    setModalActive(false);
  };

  return (
    <div data-testid="pages/user-form">
      <Forms onSubmit={handleSubmit} />
      <UserCards />
      {modalActive && (
        <Modal status={status} onClick={handleOnClickModal} content={UserFormModalContent} />
      )}
    </div>
  );
};
