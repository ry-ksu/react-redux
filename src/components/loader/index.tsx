import React from 'react';
import './style.css';

type ILoaderProps = {
  isLoading: string;
};

export const Loader = (props: ILoaderProps) => {
  return (
    <div
      data-testid="loader"
      className={props.isLoading === 'LOADING' ? 'loader_active' : 'loader'}
    >
      <div className="loader__img"></div>
    </div>
  );
};
