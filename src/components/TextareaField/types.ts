import { TextareaHTMLAttributes } from 'react';

export type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  htmlFor?: string;
};
