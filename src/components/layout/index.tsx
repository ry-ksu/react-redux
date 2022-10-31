import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.css';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles['active-link'] : '');

export const Layout = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header>
          <NavLink className={setActive} to="/">
            Games
          </NavLink>
          <NavLink className={setActive} to="/forms">
            Forms
          </NavLink>
          <NavLink className={setActive} to="/about">
            About
          </NavLink>
        </header>
      </div>

      <Outlet />

      {/* <footer>2022</footer> */}
    </>
  );
};
