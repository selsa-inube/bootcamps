import styled from "styled-components";
const StyledBrowserOne = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  list-style: none;

  li a {
    color: #7a7a7a;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    border-bottom: 1px solid #7a7a7a;
  }
  a {
    border-bottom: 1px solid #f6f6f6;
  }
`;
export { StyledBrowserOne };
