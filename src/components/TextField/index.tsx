import React, { ChangeEvent, useState } from 'react';

import * as S from './styles';
import { TextFieldProps } from './types';

export const TextField = ({
  label,
  htmlFor = '',
  initialValue = '',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <S.Container>
      {!!label && <S.Label htmlFor={htmlFor}>{label}</S.Label>}
      <S.Input id={htmlFor} {...props} value={value} onChange={onChange} />
    </S.Container>
  );
};
