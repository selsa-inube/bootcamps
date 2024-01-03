import { StyledFooter } from "./styles.js";

const Footer = () => {
  return (
    <StyledFooter>
      <nav id="left-side-footer">
        <div>
          <p>MARKET SNAPSHOT</p>
          <p>6:07 AM</p>
        </div>
        <ul>
          <li>
            <a href="#">Futures</a>
          </li>
          <li>
            <a href="#">Americas</a>
          </li>
          <li>
            <a href="#">Europe</a>
          </li>
          <li>
            <a href="#">Asia</a>
          </li>
          <li>
            <a href="#">Commodities</a>
          </li>
        </ul>
      </nav>
      <a id="overview" href="#">
        FULL MARKET OVERVIEW{" >"}
      </a>
    </StyledFooter>
  );
};

export { Footer };
