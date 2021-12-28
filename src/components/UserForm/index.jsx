import { useInputValue } from '../../hooks/useInputValue';
import React from 'react';
import { Button, Input, Form, Title } from './Styles';

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type='mail' placeholder='E-mail' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
