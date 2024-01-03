import styled from "styled-components";

const StyledHeader = styled.header`
  /* start of header styles */

  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 10vh;

  #account-managment {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    align-items: center;
  }

  #left-side-header i {
    color: black;
    margin: 10px;
    font-size: 0.9rem;
  }

  #left-side-header i:first-of-type {
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

  #right-side-header {
    display: flex;
    justify-content: flex-end;
  }

  #right-side-header button {
    padding: 10px 20px;
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
  }

  #right-side-header button:hover {
    cursor: pointer;
  }

  #right-side-header button:nth-of-type(2) {
    background-color: #f6f6f6;
    border: solid #d8d8d8;
  }

  #right-side-header button:nth-of-type(1) {
    background-color: #f6f6f6;
    border: none;
  }
  /* end of header styles */
`;

export { StyledHeader };
