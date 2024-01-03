import styled from "styled-components";

const StyledFastForward = styled.section`
  /* #fast-forward styles */

  grid-row: 2/3;
  grid-column: 5/6;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 15fr 1fr;

  h2 {
    grid-row: 1/2;
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }

  > FastForwardArticles {
    grid-row: 2/3;
  }
`;

export { StyledFastForward };
