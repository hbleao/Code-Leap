import React from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '.';

const Child = () => {
  throw new Error('Test');
};

const makeSut = () => {
  const sut = render(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );

  return {
    sut
  };
};

describe('Error Boundary', () => {
  it(`should render error boundary component when there is an error`, () => {
    makeSut();

    const errorMessage = screen.queryByText('Sorry.. there was an error');

    expect(errorMessage).toBeVisible();
  });
});
