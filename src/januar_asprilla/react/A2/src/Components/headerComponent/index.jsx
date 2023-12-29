import {
  HeaderStyled,
  NavbarUp,
  NavbarIcon,
  IconStyled,
  ButtonContainer,
  NavbarDown,
  DateContainer,
  ListNav,
  ButtonNavDown,
} from "./headerStyle";
import { Logo } from "../logoComponent";
import { Button } from "../buttonComponents";
import { TextDate } from "../textDate";
import { ItemList } from "../itemList";

function Header() {
  return (
    <HeaderStyled>
      <NavbarUp>
        <NavbarIcon>
          <IconStyled className="fa-solid fa-magnifying-glass"></IconStyled>
          <IconStyled className="fa-solid fa-bell"></IconStyled>
        </NavbarIcon>
        <Logo />
        <ButtonContainer>
          <Button label="sing in" />
          <Button label="subscribe" border={true} />
        </ButtonContainer>
      </NavbarUp>
      <NavbarDown>
        <DateContainer>
          <TextDate label="Thursday" shape={true} size={true} />
          <TextDate label="May 21, 2020" />
        </DateContainer>
        <ListNav>
          <ItemList href="#" label="World" />
          <ItemList href="#" label="Politics" />
          <ItemList href="#" label="Business" />
          <ItemList href="#" label="Opinion" />
          <ItemList href="#" label="Tech" />
          <ItemList href="#" label="Science" />
          <ItemList href="#" label="Sports" />
          <ItemList href="#" label="Arts" />
          <ItemList href="#" label="Books" />
          <ItemList href="#" label="Style" />
          <ItemList href="#" label="Food" />
          <ItemList href="#" label="Travel" />
          <ItemList href="#" label="Magazine" />
        </ListNav>
        <ButtonNavDown>...</ButtonNavDown>
      </NavbarDown>
    </HeaderStyled>
  );
}

export { Header };
