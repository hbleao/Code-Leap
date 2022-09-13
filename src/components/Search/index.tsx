/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import * as S from './styles';
import { SearchProps } from './types';

import SvgSearch from '@/assets/icon-search.svg';

export const Search = ({ doSearch, ...props }: SearchProps) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    doSearch(term);
  }, [term]);

  return (
    <S.Container name="search-form">
      <SvgSearch />
      <S.Input
        type="search"
        value={term}
        onChange={e => setTerm(e.target.value)}
        {...props}
      />
    </S.Container>
  );
};
