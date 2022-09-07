import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';

import { Modal } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type MakeSutProps = {
  content?: ReactNode;
  isOpen?: boolean;
};

const modalDiv = document.createElement('div');
modalDiv.setAttribute('class', '__modal-root');
document.querySelector('body')?.appendChild(modalDiv);

const makeSut = ({ content = 'modal', isOpen = false }: MakeSutProps) => {
  const sut = renderWithTheme(<Modal content={content} isOpen={isOpen} />);

  return {
    sut
  };
};

describe('Modal', () => {
  it('should not be render a Modal by default', async () => {
    makeSut({});

    const modalTitle = screen.getByText(/Modal/i);

    expect(modalTitle.parentElement).toHaveStyle({
      display: 'none'
    });
  });

  it('should be render a Modal', async () => {
    makeSut({ isOpen: true });

    const modalTitle = screen.getByText(/Modal/i);

    expect(modalTitle.parentElement).toHaveStyle({
      display: 'flex'
    });
  });
});
