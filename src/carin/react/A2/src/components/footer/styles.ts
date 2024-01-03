import styled from "styled-components";

const StyledFooter = styled.footer`
  /* Start of footer styles */

  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #left-side-footer {
    width: 60%;
  }
  #left-side-footer {
    display: flex;
    align-items: center;
  }
  #left-side-footer p {
    font-size: 0.6rem;
    line-height: 1.5em;
  }
  #left-side-footer p:first-of-type {
    color: black;
  }

  #left-side-footer ul {
    display: flex;
  }

  #left-side-footer li {
    list-style-type: none;
    margin: 10px 15px;
  }

  #left-side-footer a {
    text-decoration: none;
    font-size: 0.6rem;
    color: gray;
  }

  #overview {
    text-decoration: none;
    font-size: 0.8rem;
    color: gray;
  }
`;

export { StyledFooter };
