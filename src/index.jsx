import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from 'routes';
import theme from 'assets/theme';

import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', san-serif;
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
