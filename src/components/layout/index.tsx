import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.css';

// const setActive = ({ isActive }: boolean) => (isActive ? 'active-link' : '');

export const Layout = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header>
          <NavLink to="/">Games</NavLink>
          <NavLink to="/forms">Forms</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>
      </div>

      <Outlet />

      {/* <footer>2022</footer> */}
    </>
  );
};
