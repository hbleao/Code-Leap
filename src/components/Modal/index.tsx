import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';
import { ModalProps } from './types';

export const Modal = ({ content, isOpen }: ModalProps) => {
  return ReactDOM.createPortal(
    <S.Container isOpen={isOpen} aria-hidden={!isOpen}>
      <S.BoxContent>{content}</S.BoxContent>
    </S.Container>,
    document.querySelector('.__modal-root')!
  );
};
