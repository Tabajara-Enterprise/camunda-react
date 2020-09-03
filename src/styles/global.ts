import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f7faff;
    color: #6f7380;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  body, input, button {
    font: 16px "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
  }
  svg#clouds {
    position: fixed;
    bottom: -160px;
    left: -230px;
    z-index: -10;
    width: 1920px;
  }
`;
