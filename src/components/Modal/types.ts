import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  size?: 'small' | 'medium';
};

export type ContainerProps = Pick<ModalProps, 'isOpen'>;

export type BoxContentProps = Pick<ModalProps, 'size'>;
