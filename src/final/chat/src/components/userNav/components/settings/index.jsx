import {
  StyledContainerSettings,
  StyledSwitch,
  HiddenCheckbox,
  RoundSlider,
  StyledSettings,
} from "./styles.js";

function Settings({ iconClass, title, link }) {
  const isDarkMode = title === "Dark Mode";
  return (
    <StyledContainerSettings>
      <StyledSettings>
        <i className={iconClass} aria-hidden="true"></i>
        <p>
          <a href={link}>{title}</a>
        </p>
      </StyledSettings>

      {isDarkMode && (
        <StyledSwitch>
          <HiddenCheckbox type="checkbox" />
          <RoundSlider />
        </StyledSwitch>
      )}
    </StyledContainerSettings>
  );
}

export { Settings };
