import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
            <UserForm onSubmit={activateAuth} title='Registrarse' />
          </>
        );
      }}
    </Context.Consumer>
  );
};
