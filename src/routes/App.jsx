import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from '../container/Layout';
import { MainRoute } from './MainRoute';
import { PrivateRoute } from './PrivateRoute';
import Context from '../Context';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <MainRoute />
          <Context.Consumer>{({ isAuth }) => <PrivateRoute isAuth={isAuth} />}</Context.Consumer>
        </Layout>
      </BrowserRouter>
    </>
  );
};
