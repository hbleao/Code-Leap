import { InputHTMLAttributes } from 'react';

export type TextareaFieldProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  htmlFor?: string;
  initialValue?: string;
};
