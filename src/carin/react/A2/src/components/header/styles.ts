import styled from "styled-components";

const StyledHeader = styled.header`
  /* start of header styles */

  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 10vh;

  nav {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    align-items: center;
  }

  nav div:first-of-type i {
    color: black;
    margin: 10px;
    font-size: 0.9rem;
  }

  nav div:first-of-type i:first-of-type {
    margin-left: 0px;
  }

  h1 {
    color: black;
    font-family: "ChomskyRegular";
    font-weight: normal;
    font-style: normal;
    text-align: center;
    font-size: 1.5rem;
  }

  div:last-of-type {
    display: flex;
    justify-content: flex-end;
  }

  /* end of header styles */
`;

export { StyledHeader };
