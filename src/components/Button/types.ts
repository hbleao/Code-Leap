import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  isDisabled?: boolean;
  isOutline?: boolean;
  icon?: ReactNode;
};

export type ContainerProps = Pick<ButtonProps, 'isDisabled' | 'isOutline'> & {
  hasIcon?: boolean;
};
