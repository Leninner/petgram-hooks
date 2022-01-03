import { Link } from 'react-router-dom';
import React from 'react';

export const NotFound = () => {
  return (
    <>
      <h1>Página no existente</h1>
      <Link to='/'>Volver al Inicio</Link>
    </>
  );
};
