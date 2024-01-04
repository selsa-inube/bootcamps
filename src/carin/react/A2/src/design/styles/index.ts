import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: gray;
  text-align: left;
}

:root {
  --text-col: gray;
}


  
`;

export { GlobalStyles };
