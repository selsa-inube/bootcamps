import styled from "styled-components";

const StyledMainSection = styled.section`
  /* #main-section styles */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row: 2/3;
  grid-column: 1/2;
  height: 50vh;

  img {
    width: 200px;
  }

  h2 {
    color: black;
    font-weight: bold;
  }

  p {
    color: var(--text-col);
    font-size: 0.6rem;
    line-height: 2em;
    font-weight: bold;
  }
`;

export { StyledMainSection };
