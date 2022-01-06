import { Link } from 'react-router-dom';
import React from 'react';
import { NotFoundContainer } from './styles';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Página no existente</h1>
      <Link to='/'>Volver al Inicio</Link>
    </NotFoundContainer>
  );
};
