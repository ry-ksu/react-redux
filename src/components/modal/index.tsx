import React from 'react';
import './index.css';

type ModalProps = {
  status: string;
  active: boolean;
  onClick: () => void;
  content: () => JSX.Element;
};

export const Modal = (props: ModalProps): JSX.Element => {
  return (
    <div
      data-testid="modal"
      className={props.active ? 'modal_active' : 'modal'}
      onClick={props.onClick}
    >
      <div
        className={
          props.status === 'form-info' ? 'modal__content_form-info' : 'modal__content_game'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={props.onClick} className="modal__cancel"></div>
        {props.content()}
      </div>
    </div>
  );
};
