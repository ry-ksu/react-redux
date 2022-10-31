import React, { useState, useContext } from 'react';
import { Forms } from 'components/forms';
// import { UserCards } from 'components/userCards';
import { Modal } from '../modal';
import { UserProps } from 'types';
// import { formState } from 'reducer';
// import { defaultState } from 'components/App';

import { AppContext } from 'components/App';

export const UserForms = () => {
  // const [state, dispatch] = useReducer(formState, defaultState);
  const state = useContext(AppContext);
  const dispatch = useContext(AppContext);
  const [modalActive, setModalActive] = useState(false);

  console.log('dkfjs:', state, dispatch);

  const status = 'form-info';

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

  const modalContent = () => {
    return <p className="content">Data added successfully!</p>;
  };

  return (
    <div data-testid="pages/user-form">
      <Forms onSubmit={handleSubmit} />
      {/* <UserCards /> */}
      {modalActive && <Modal status={status} onClick={handleOnClickModal} content={modalContent} />}
    </div>
  );
};
