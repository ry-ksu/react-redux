import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';

// const setActive = ({ isActive }: boolean) => (isActive ? 'active-link' : '');

export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <Outlet />

      <footer>2022</footer>
    </>
  );
};
