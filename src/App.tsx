import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyles } from './styles/global';

import { ApplicationRoutes } from './routes';

import theme from './styles/theme';
import store, { persistor } from './redux/store';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <ApplicationRoutes />
            <GlobalStyles />
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
