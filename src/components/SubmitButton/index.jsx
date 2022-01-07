import { Button, ButtonWrapper } from './styles';
import React from 'react';
import PropTypes from 'prop-types';

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper>
      <Button disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </ButtonWrapper>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
