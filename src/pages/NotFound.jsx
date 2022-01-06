import { Link } from 'react-router-dom';
import React from 'react';
import { NotFoundContainer } from './styles';
import { Layout } from '../container/Layout';

export const NotFound = () => {
  return (
    <Layout title='Página no existente'>
      <NotFoundContainer>
        <Link to='/'>Volver al Inicio</Link>
      </NotFoundContainer>
    </Layout>
  );
};
