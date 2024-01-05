import { StyledContainerInformation, StyledInformation } from "./styles.js";

function Data({ label, value, iconClass }) {
  return (
    <StyledContainerInformation>
      <i className={iconClass} aria-hidden="true"></i>
      <StyledInformation>
        <p>{value}</p>
        <p>{label}</p>
      </StyledInformation>
    </StyledContainerInformation>
  );
}

export { Data };
