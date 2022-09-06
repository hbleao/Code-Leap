import React from 'react';

import { Container } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  isDisabled = false,
  isOutline = false,
  ...props
}: ButtonProps) => {
  return (
    <Container
      isDisabled={isDisabled}
      disabled={isDisabled}
      isOutline={isOutline}
      aria-disabled={isDisabled}
      {...props}
    >
      {children}
    </Container>
  );
};
