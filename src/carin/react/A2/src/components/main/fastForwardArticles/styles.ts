import styled from "styled-components";

const StyledFastForwardArticles = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;

  h3 {
    font-size: 0.8rem;
    font-weight: bold;
    grid-row: 1/2;
    grid-column: 1/2;
    color: black;
  }
  p {
    font-size: 0.8rem;
    font-weight: bold;
    grid-row: 2/3;
    grid-column: 1/2;
    color: var(--text-col);
  }

  img {
    width: 80px;
    grid-row: 1/3;
    grid-column: 2/3;
    margin: 10px;
  }
`;

export { StyledFastForwardArticles };
