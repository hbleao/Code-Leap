import React from 'react';
import { screen, render } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('should be able to render a button', () => {
    render(<Button />);
  });
});
