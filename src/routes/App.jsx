import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Context from '../Context';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Context.Consumer>{({ isAuth }) => <PrivateRoute isAuth={isAuth} />}</Context.Consumer>
      </BrowserRouter>
    </>
  );
};
