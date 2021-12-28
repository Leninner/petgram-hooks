import { useInputValue } from '../../hooks/useInputValue';
import React from 'react';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <form onSubmit={onSubmit}>
      <input type='mail' placeholder='E-mail' {...email} />
      <input type='password' placeholder='Password' {...password} />
      <button>Iniciar Sesión</button>
    </form>
  );
};
