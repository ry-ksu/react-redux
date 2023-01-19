import React from 'react';
import './index.css';

type ModalProps = {
  status: string;
  onClick: () => void;
  content: () => JSX.Element;
};

export const Modal = (props: ModalProps): JSX.Element => {
  return (
    <div data-testid="modal" className="modal_active" onClick={props.onClick}>
      <div
        className={
          props.status === 'modal_user-form' ? 'modal__content_user-form' : 'modal__content_game'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={props.onClick} className="modal__cancel"></div>
        {props.content()}
      </div>
    </div>
  );
};
