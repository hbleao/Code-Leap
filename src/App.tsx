import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ApplicationRoutes } from './routes';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRoutes />
      <GlobalStyles />
    </ThemeProvider>
  );
};
