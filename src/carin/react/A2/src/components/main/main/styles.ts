import styled from "styled-components";

const StyledMain = styled.main`
  /* Start of main styles */

  width: 100%;

  > article {
    display: grid;
    grid-template-rows: 10vh auto;
    grid-template-columns: 4fr auto 3fr auto 3fr;
    justify-content: space-around;
    padding-bottom: 15px;
  }

  > article hr:first-of-type {
    height: 100%;
    grid-row: 2/3;
    grid-column: 2/3;
    margin: 0 20px;
  }

  > article hr:nth-of-type(2) {
    height: 100%;
    grid-row: 2/3;
    grid-column: 4/5;
    margin: 0 20px;
  }

  .continue-reading {
    text-decoration: underline;
    font-size: 0.6rem;
    text-underline-offset: 5px;
    color: gray;
  }
`;

export { StyledMain };
