import React from 'react';
import ReactDOM from 'react-dom';

import { HackerNewsProvider } from './context/HackerNews';
import GlobalStyle from './GlobalStyle';

import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <HackerNewsProvider>
      <GlobalStyle />
      <App />
    </HackerNewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);