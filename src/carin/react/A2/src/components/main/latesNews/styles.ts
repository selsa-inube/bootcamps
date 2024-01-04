import styled from "styled-components";

const StyledLatestNews = styled.section`
  /* #latest-news styles */

  grid-row: 2/3;
  grid-column: 3/4;

  h2 {
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }

  button {
    background-color: transparent;
    border: none;
    margin: 20px;
    margin-left: 0;
    display: flex;
    align-items: center;
  }

  button i {
    color: gray;
    font-size: 0.5rem;
    align-self: center;
    margin: 5px;
  }

  button i:first-of-type {
    color: black;
    font-size: 0.7rem;
    margin-left: 0;
  }
`;

export { StyledLatestNews };
