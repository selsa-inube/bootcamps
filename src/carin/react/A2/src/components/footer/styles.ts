import styled from "styled-components";

const StyledFooter = styled.footer`
  /* Start of footer styles */

  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeftSideFooter = styled.nav`
  width: 60%;
  display: flex;
  align-items: center;

  p {
    font-size: 0.6rem;
    line-height: 1.5em;
  }
  p:first-of-type {
    color: black;
  }

  ul {
    display: flex;
  }
`;

const StyledOverview = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  color: gray;
`;
export { StyledFooter, StyledLeftSideFooter, StyledOverview };
