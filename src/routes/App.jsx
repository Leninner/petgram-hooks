import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../container/Layout';
import { MainRoute } from './MainRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <MainRoute />
          <PrivateRoute isAuth={false} />
        </Layout>
      </BrowserRouter>
    </>
  );
};
