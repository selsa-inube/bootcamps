import { LogoStyled, ImageStyled } from "./StyledLogo.js";

function Logo() {
  return (
    <LogoStyled>
      <ImageStyled
        src="The_New_York_Times_Logo.png.png"
        alt="The New York Times"
      />
    </LogoStyled>
  );
}

export { Logo };
