import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  loaderColor?: 'white' | 'black';
  isDisabled?: boolean;
  isOutline?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
};

export type ContainerProps = Pick<ButtonProps, 'isDisabled' | 'isOutline'> & {
  hasIcon?: boolean;
};
