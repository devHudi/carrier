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

  html, body, #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
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
