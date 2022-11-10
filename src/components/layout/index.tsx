import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from 'hook';
import styles from './index.module.css';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles['active-link'] : '');

export const Layout = () => {
  const gameState = useAppSelector((state) => state.search.chosenGame);
  let gamePath = `game/${gameState?.id}`;

  if (!gameState?.id) {
    gamePath = '/';
  }
  return (
    <>
      <div className={styles.headerWrapper}>
        <header>
          <NavLink className={setActive} to="/">
            Games
          </NavLink>
          <NavLink className={setActive} to={gamePath}>
            Game
          </NavLink>
          <NavLink className={setActive} to="forms">
            Forms
          </NavLink>
          <NavLink className={setActive} to="about">
            About
          </NavLink>
        </header>
      </div>

      <Outlet />
    </>
  );
};
