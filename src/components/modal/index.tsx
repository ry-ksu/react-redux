import React, { ReactNode } from 'react';
import './index.css';

type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactNode;
};

export const Modal = (props: ModalProps): JSX.Element => {
  return (
    <div className={props.active ? 'modal_active' : 'modal'} onClick={() => props.setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {props.content}
      </div>
    </div>
  );
};
