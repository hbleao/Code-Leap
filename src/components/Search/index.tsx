import React, { useState } from 'react';

import * as S from './styles';
import { SearchProps } from './types';

import SvgSearch from '@/assets/icon-search.svg';

export const Search = ({ doSearch, ...props }: SearchProps) => {
  const [term, setTerm] = useState('');

  return (
    <S.Container name="search-form" onSubmit={() => doSearch(term)}>
      <S.Input
        type="search"
        value={term}
        onChange={e => setTerm(e.target.value)}
        {...props}
      />
      <SvgSearch />
    </S.Container>
  );
};
