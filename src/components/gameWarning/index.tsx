import React from 'react';
import styles from './index.module.css';

export const GameWarning = (warning: string) => {
  return (
    <div className={styles.warning}>
      <p>{warning}</p>
    </div>
  );
};
