import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'intersection-observer';
import 'element-scroll-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { FlickrProvider } from './context/flickr';

import GlobalStyle from './global-style';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <FlickrProvider>
      <GlobalStyle />
      <App />
    </FlickrProvider>
  </React.StrictMode>,
  document.getElementById('root')
);