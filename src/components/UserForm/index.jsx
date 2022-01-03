import { useInputValue } from '../../hooks/useInputValue';
import React from 'react';
import { Input, Form, Title, Error } from './Styles';
import { SubmitButton } from '../SubmitButton';
import { Link } from 'react-router-dom';

export const UserForm = ({ onSubmit, title, error, disabled, onClick, msm, top, login }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input disabled={disabled} type='mail' placeholder='E-mail' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />

        <span>
          {msm}
          <Link to='/user' onClick={login}>
            {top}
          </Link>
        </span>

        <SubmitButton disabled={disabled} onClick={onClick}>
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
