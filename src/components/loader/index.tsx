import React from 'react';
import './style.css';

type ILoaderProps = {
  isLoading: number;
};

export const Loader = (props: ILoaderProps) => {
  return (
    <div data-testid="loader" className={props.isLoading === 2 ? 'loader_active' : 'loader'}>
      <div className="loader__img"></div>
    </div>
  );
};
