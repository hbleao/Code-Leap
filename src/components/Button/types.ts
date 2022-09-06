import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isDisabled?: boolean;
  isOutline?: boolean;
};

export type ContainerProps = Pick<ButtonProps, 'isDisabled' | 'isOutline'>;
