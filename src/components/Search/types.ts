import { InputHTMLAttributes } from 'react';

export type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
  doSearch: (term: string) => void;
};
