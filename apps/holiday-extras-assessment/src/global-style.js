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
    background-color: #f5f5f5;
    color: #151517;
  }
  
  a { color: #3498D8; }
  img { max-width: 100%; }
  
  #root {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;

    padding-top: 48px;

    @supports (position: sticky) {
      padding-top: 0;
    }
  }
`;

export default GlobalStyle;