import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

import { GlobalStyles } from './styles/global';

import { ApplicationRoutes } from './routes';

import theme from './styles/theme';
import store from './redux/store';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ApplicationRoutes />
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};
