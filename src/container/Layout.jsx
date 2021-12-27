import React from 'react';
import { Logo } from '../components/Logo';
import { NavBar } from '../components/NavBar';
import { GlobalStyles } from '../styles/GlobalStyles';

export const Layout = ({ children }) => {
  return (
    <>
      <Logo />
      {children}
      <NavBar />
    </>
  );
};
