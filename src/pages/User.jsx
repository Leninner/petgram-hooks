import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';

export const User = () => {
  const { deactivateAuth } = useContext(Context);

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={deactivateAuth}>Log Out</SubmitButton>
    </>
  );
};
