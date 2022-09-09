import React from 'react';

import * as S from './styles';
import { TextareaFieldProps } from './types';

export const TextareaField = ({
  label,
  htmlFor = '',
  value,
  onChange,
  ...props
}: TextareaFieldProps) => {
  return (
    <S.Container>
      {!!label && <S.Label htmlFor={htmlFor}>{label}</S.Label>}
      <S.TextArea id={htmlFor} value={value} onChange={onChange} {...props} />
    </S.Container>
  );
};
