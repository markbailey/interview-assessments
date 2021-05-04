import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    min-height: 100vh;

    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #212121;
    color: #ffffff;
  }

  a { color: #212121; }

  code {
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;
  }
`;

export default GlobalStyle;