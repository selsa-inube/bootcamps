import { StyledNavTopics } from "./styles.js";

const NavTopics = () => {
  return (
    <StyledNavTopics>
      <div id="date">
        <p>Thursday</p>
        <p>May 21, 2020</p>
      </div>
      <ul>
        <li>
          <a href="#">World</a>
        </li>
        <li>
          <a href="#">Politics</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Opinion</a>
        </li>
        <li>
          <a href="#">Tech</a>
        </li>
        <li>
          <a href="#">Science</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Arts</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">Style</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Magazine</a>
        </li>
      </ul>
      <button>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
    </StyledNavTopics>
  );
};

export { NavTopics };
