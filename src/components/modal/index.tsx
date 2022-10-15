import React, { ReactNode } from 'react';
import './index.css';

type ModalProps = {
  active: boolean;
  onClick: () => void;
  content: ReactNode;
};

export const Modal = (props: ModalProps): JSX.Element => {
  return (
    <div
      data-testid="modal"
      className={props.active ? 'modal_active' : 'modal'}
      onClick={props.onClick}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {props.content}
      </div>
    </div>
  );
};
