import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;
const StyledContenedor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  border-bottom: 1px solid #a1a1a1;
`;
const StyledIcons = styled.div`
  display: flex;
  width: 211px;
  gap: 20px;
`;

const StyledLogo = styled.img`
  width: 200px;
`;
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  gap: 20px;
  font-weight: 700;

  width: 211px;
`;
//Nav
const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  width: 100%;
  height: 70px;
`;

const StyledBlackFrame = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  color: #fff;
  padding: 20px;
  background-color: #000;
  cursor: pointer;
`;
export {
  StyledHeader,
  StyledContenedor,
  StyledIcons,
  StyledLogo,
  StyledList,
  StyledNav,
  StyledBlackFrame,
};
