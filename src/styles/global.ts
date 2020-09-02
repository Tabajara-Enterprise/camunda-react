import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font: 16px "Poppins", sans-serif;
    color: #353535;
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
