import styled from "styled-components";

const StyledNavBarSections = styled.nav`
  /* nav sections styles */

  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-row: 1/2;
  grid-column: 1/6;

  ul {
    display: flex;
    width: 100%;
  }

  li {
    list-style-type: none;
    margin: 10px;
  }

  a {
    text-decoration: none;
    font-size: 0.6rem;
    color: gray;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  a:active {
    color: black;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
  }

  li:first-of-type {
    margin-left: 0;
  }
  li:first-of-type a {
    color: black;
    font-size: 1rem;
    font-weight: bold;
  }

  li:nth-of-type(2) a {
    text-decoration: underline;
  }
`;

export { StyledNavBarSections };
