import { Button, ButtonWrapper } from './styles';
import React from 'react';

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper>
      <Button disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </ButtonWrapper>
  );
};
