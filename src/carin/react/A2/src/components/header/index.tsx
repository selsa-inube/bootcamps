import { StyledHeader } from "./styles.js";

const Header = () => {
  return (
    <StyledHeader>
      <nav id="account-managment">
        <div id="left-side-header">
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
        <h1>The New York Times</h1>
        <div id="right-side-header">
          <button>SIGN IN</button>
          <button>SUBSCRIBE</button>
        </div>
      </nav>
    </StyledHeader>
  );
};

export { Header };
