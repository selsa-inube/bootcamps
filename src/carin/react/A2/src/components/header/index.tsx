import { StyledHeader } from "./styles.js";
import { Button } from "../button/index.js";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div>
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
        <h1>The New York Times</h1>
        <div>
          <Button styledOption="no-border" content="SIGN IN" />
          <Button styledOption="border" content="SUBSCRIBE" />
        </div>
      </nav>
    </StyledHeader>
  );
};

export { Header };
