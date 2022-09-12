import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';

import { Modal } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type MakeSutProps = {
  children?: ReactNode;
  isOpen?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const modalDiv = document.createElement('div');
modalDiv.setAttribute('class', '__modal-root');
document.querySelector('body')?.appendChild(modalDiv);

const makeSut = ({
  children = 'modal',
  isOpen = false,
  size
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Modal isOpen={isOpen} size={size}>
      {children}
    </Modal>
  );

  return {
    sut
  };
};

describe('Modal', () => {
  it('should not be render a Modal by default', async () => {
    makeSut({});

    const modal = screen.getByText(/Modal/i);

    expect(modal.parentElement).toHaveStyle({
      display: 'none'
    });
  });

  it('should be render a Modal', async () => {
    makeSut({ isOpen: true });

    const modal = screen.getByText(/Modal/i);

    expect(modal.parentElement).toHaveStyle({
      display: 'flex'
    });
  });

  it('should be render a small size by default on mobile version', async () => {
    makeSut({ isOpen: true });

    const modal = screen.getByText(/Modal/i);

    expect(modal).toHaveStyle({
      width: '90%'
    });
  });

  it('should be render a small size by default on desktop version', async () => {
    makeSut({ isOpen: true });

    const modal = screen.getByText(/Modal/i);

    expect(modal).toHaveStyleRule('width', '50rem', {
      media: '(min-width: 450px)'
    });
  });

  it('should be render a medium Modal', async () => {
    makeSut({ isOpen: true, size: 'medium' });

    const modal = screen.getByText(/Modal/i);

    expect(modal).toHaveStyleRule('width', '66rem', {
      media: '(min-width: 450px)'
    });
  });

  it('should be render a large Modal', async () => {
    makeSut({ isOpen: true, size: 'large' });

    const modal = screen.getByText(/Modal/i);

    expect(modal).toHaveStyleRule('width', '72rem', {
      media: '(min-width: 450px)'
    });
  });
});
