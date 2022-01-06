import React from 'react';
import { Logo } from '../components/Logo';
import { NavBar } from '../components/NavBar';
import { Helmet } from 'react-helmet';
import { Title } from './styles';

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🦊</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Logo />
      <div>
        {title && <Title>{title}</Title>}
        {subtitle && <h2>{subtitle}</h2>}
        {children}
      </div>
      <NavBar />
    </>
  );
};
