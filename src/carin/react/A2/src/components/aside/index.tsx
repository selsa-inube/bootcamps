import { StyledAside } from "./styles.js";

const Aside = () => {
  return (
    <StyledAside>
      <button>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
      <button>||</button>
      <button>
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      </button>
    </StyledAside>
  );
};

export { Aside };
