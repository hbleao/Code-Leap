import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

const domNode = document.querySelector('.__root');

ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  domNode
);
