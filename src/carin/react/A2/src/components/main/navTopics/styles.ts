import styled from "styled-components";

const StyledNavTopics = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr auto;
  height: 5vh;
  align-items: center;
  margin-top: -2px;
  width: 100%;

  /* nav topics styles */

  #date p {
    font-size: 0.6rem;
    line-height: 1.5em;
  }
  #date p:first-of-type {
    color: black;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    font-size: 0.6rem;
    color: gray;
  }

  button {
    height: 5vh;
    width: 5vh;
    border: none;
    background-color: black;
    color: white;
  }
`;

export { StyledNavTopics };
