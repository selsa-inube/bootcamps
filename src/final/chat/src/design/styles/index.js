import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #000;
    background-color: #fff;
  }
  
`;

export { GlobalStyles };
