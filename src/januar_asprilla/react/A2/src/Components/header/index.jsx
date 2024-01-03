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
} from "./StyledHeader.js";
import { Logo } from "../logo";
import { Button } from "../button";
import { TextDate } from "../textDate";
import { ItemList } from "../itemList";

const NavItems = [
  { id: 1, label: "World" },
  { id: 2, label: "Politics" },
  { id: 3, label: "Business" },
  { id: 4, label: "Opinion" },
  { id: 5, label: "Tech" },
  { id: 6, label: "Science" },
  { id: 7, label: "Sports" },
  { id: 8, label: "Arts" },
  { id: 9, label: "Books" },
  { id: 10, label: "Style" },
  { id: 11, label: "Food" },
  { id: 12, label: "Travel" },
  { id: 13, label: "Magazine" },
];
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
          {NavItems.map((item) => (
            <ItemList key={item.id} href="#" label={item.label} />
          ))}
        </ListNav>
        <ButtonNavDown>...</ButtonNavDown>
      </NavbarDown>
    </HeaderStyled>
  );
}

export { Header };
