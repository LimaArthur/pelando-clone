import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #e9e9e9;
    --header: #FFFFFF;

    --button: #f27a0d;
    --button-hover: #e7730c;

    --font: #4D4D4D;
    --small: #bababa;

    --ice: #4c4cff;

    --black: 	#000000;
    
    }
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Nunito Sans', Helvetica, Arial , sans-serif;
  }
`;