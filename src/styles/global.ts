import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, 
    &::after {
      box-sizing: inherit;
    }
  }

    html {
      font-size: 62.5%;
    }

    ${({ theme }) => css`
      body {
        font-family: ${theme.font.family};
        background-color: ${theme.colors.mainBg};
      }
    `}
`;
