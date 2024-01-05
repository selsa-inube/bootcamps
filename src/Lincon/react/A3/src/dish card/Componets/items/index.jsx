import {
  StyledItems,
  StyledText,
  StyledIcons,
  StyledContainerIcons,
} from "./styled";
function Items({ active, text, iconClassName }) {
  return (
    <StyledItems>
      <StyledContainerIcons active={active}>
        <StyledIcons active={active} className={iconClassName}></StyledIcons>
      </StyledContainerIcons>

      <StyledText>{text}</StyledText>
    </StyledItems>
  );
}

export { Items };
