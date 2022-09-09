import React from 'react';

import * as S from './styles';
import { TextFieldProps } from './types';

export const TextField = ({
  label,
  htmlFor = '',
  onChange,
  value,
  ...props
}: TextFieldProps) => {
  return (
    <S.Container>
      {!!label && <S.Label htmlFor={htmlFor}>{label}</S.Label>}
      <S.Input id={htmlFor} value={value} onChange={onChange} {...props} />
    </S.Container>
  );
};
