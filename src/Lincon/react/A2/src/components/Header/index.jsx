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
  { label: "World", link: "#" },
  { label: "Politics", link: "#" },
  { label: "Business", link: "#" },
  { label: "Opinion", link: "#" },
  { label: "Tech", link: "#" },
  { label: "Science", link: "#" },
  { label: "Sports", link: "#" },
  { label: "Arts", link: "#" },
  { label: "Books", link: "#" },
  { label: "Style", link: "#" },
  { label: "Food", link: "#" },
  { label: "Travel", link: "#" },
  { label: "Magazine", link: "#" },
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
