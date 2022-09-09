import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large';
};

export type ContainerProps = Pick<ModalProps, 'isOpen'>;

export type BoxContentProps = Pick<ModalProps, 'size'>;
