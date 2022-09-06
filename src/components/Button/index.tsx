import React from 'react';

import { Container } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  isDisabled = false,
  isOutline = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Container
      isDisabled={isDisabled}
      disabled={isDisabled}
      isOutline={isOutline}
      hasIcon={!!icon}
      aria-disabled={isDisabled}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </Container>
  );
};
