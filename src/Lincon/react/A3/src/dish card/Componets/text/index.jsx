import {
  StyledTitle,
  StyledSubtitle,
  StyledMain,
  StyledContainerOne,
  StyledIcon,
  StyledLink,
  StyledName,
} from "./styled";
function Text({
  title,
  iconClass,
  subtitle,
  linkText,
  linkHref,
  name,
  rowDirection,
  isLarge,
}) {
  return (
    <StyledMain>
      <StyledContainerOne>
        <StyledTitle isLarge={isLarge}>{title}</StyledTitle>
        <StyledIcon className={iconClass} aria-hidden="true"></StyledIcon>
      </StyledContainerOne>

      <StyledSubtitle rowDirection={rowDirection}>
        {subtitle}
        <StyledLink href={linkHref}> {linkText}</StyledLink>
        <StyledName>{name}</StyledName>
      </StyledSubtitle>
    </StyledMain>
  );
}
export { Text };
