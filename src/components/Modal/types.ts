import { ReactNode } from 'react';

export type ModalProps = {
  content: ReactNode;
  isOpen: boolean;
};

export type ContainerProps = Pick<ModalProps, 'isOpen'>;
