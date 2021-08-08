import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { toastConfig } from 'react-simple-toasts';
import reset from 'styled-reset';
import Router from 'routes';
import theme from 'assets/theme';
import reportWebVitals from './reportWebVitals';

toastConfig({
  time: 5000,
  className: 'my-toast-message',
});

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', san-serif;
    outline: none;
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
