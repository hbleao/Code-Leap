import React, { ChangeEvent, useState } from 'react';

import * as S from './styles';
import { TextareaFieldProps } from './types';

export const TextareaField = ({
  label,
  htmlFor = '',
  initialValue = '',
  ...props
}: TextareaFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <S.Container>
      {!!label && <S.Label htmlFor={htmlFor}>{label}</S.Label>}
      <S.TextArea id={htmlFor} value={value} onChange={onChange} {...props} />
    </S.Container>
  );
};
