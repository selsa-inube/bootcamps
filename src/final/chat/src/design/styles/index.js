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
    font-family: "Arial Narrow", sans-serif;
  }
  :root {
  --purple-col: #8f47ff;
  --gay-col: #f9f9f9;
}
  
`;

export { GlobalStyles };
