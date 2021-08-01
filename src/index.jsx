import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from 'routes';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
