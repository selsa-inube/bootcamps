import styled from "styled-components";

//Estilos del navbar de arriba
const HeaderStyled = styled.header`
  height: 140px;
`;
const NavbarUp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgb(233, 233, 233);
`;
const NavbarIcon = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 2rem;
`;
const IconStyled = styled.i`
  list-style-type: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 5px;
  justify-content: end;
`;
//Estilos del navbar de abajo

const NavbarDown = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 20px;
`;
const DateContainer = styled.div`
  display: grid;

  grid-template-rows: repeat(2, auto);
`;
const ListNav = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 10px;
  flex-wrap: wrap;
`;
const ButtonNavDown = styled.button`
  padding: 5px 20px 15px;
  background-color: black;
  color: white;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;
export {
  HeaderStyled,
  NavbarUp,
  NavbarIcon,
  IconStyled,
  ButtonContainer,
  NavbarDown,
  DateContainer,
  ListNav,
  ButtonNavDown,
};
