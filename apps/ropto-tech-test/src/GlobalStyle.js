import { createGlobalStyle } from 'styled-components';
import BackgroundImage from './assets/background.png';

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

  code {
    width: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    
    width: 100%;
    height: 100vh;

    background-color: rgb(255 109 0 / 70%);
    background-image: url('${BackgroundImage}');
    background-repeat: no-repeat;

    overflow-y: auto;

    @media (min-width: 768px) {
      align-items: center;
    }
  }
`;

export default GlobalStyle;