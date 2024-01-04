import {
  StyledHeader,
  StyledContenedor,
  StyledIcons,
  StyledLogo,
  StyledList,
  StyledNav,
  StyledBlackFrame,
} from "./styles";
import React from "react";
import { Button } from "../Button";
import { Lists } from "../Lists";
import { Title } from "../Title";

const navItemsHeader = [
  { id: "1", label: "World", link: "#" },
  { id: "2", label: "Politics", link: "#" },
  { id: "3", label: "Business", link: "#" },
  { id: "4", label: "Opinion", link: "#" },
  { id: "5", label: "Tech", link: "#" },
  { id: "6", label: "Science", link: "#" },
  { id: "7", label: "Sports", link: "#" },
  { id: "8", label: "Arts", link: "#" },
  { id: "9", label: "Books", link: "#" },
  { id: "10", label: "Style", link: "#" },
  { id: "11", label: "Food", link: "#" },
  { id: "12", label: "Travel", link: "#" },
  { id: "13", label: "Magazine", link: "#" },
];

function Header() {
  const dateInfo = (
    <>
      <li>Thursday</li>
      <li>May 21, 2020</li>
    </>
  );
  return (
    <StyledHeader>
      <StyledContenedor>
        <StyledIcons>
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-bell" aria-hidden="true"></i>
        </StyledIcons>
        <StyledLogo
          src="ima/The_New_York_Times_Logo.svg.png"
          alt="The-New-York-Times"
        />

        <StyledList>
          <li>
            <Button label="SIGN IN" />
          </li>
          <li>
            <Button label="SUBSCRIBE" border={true} padding={true} />
          </li>
        </StyledList>
      </StyledContenedor>
      <StyledNav>
        <Title>{dateInfo}</Title>
        <Lists items={navItemsHeader} />

        <StyledBlackFrame>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </StyledBlackFrame>
      </StyledNav>
    </StyledHeader>
  );
}

export { Header };
