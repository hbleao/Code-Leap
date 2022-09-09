import React from 'react';

import { Container } from './styles';
import { ButtonProps } from './types';

import { ButtonLoader } from './ButtonLoader';

export const Button = ({
  children,
  loaderColor = 'white',
  isDisabled = false,
  isOutline = false,
  icon,
  isLoading = false,
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
      {!!children && !isLoading && <span>{children}</span>}
      {isLoading && <ButtonLoader loaderColor={loaderColor} />}
    </Container>
  );
};
