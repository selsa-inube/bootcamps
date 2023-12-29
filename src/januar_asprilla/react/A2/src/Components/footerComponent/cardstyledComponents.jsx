import {
  CardContainer,
  InfoCard,
  TitleContainer,
  IconInfoExtraStyle,
} from "./footerStyle.js";

function ContainerCard(props) {
  const { background, children } = props;
  return <CardContainer background={background}>{children}</CardContainer>;
}
function ContainerInfoCard(props) {
  const { background, children } = props;
  return <InfoCard background={background}>{children}</InfoCard>;
}
function ContainerTitleCard(props) {
  const { background, children } = props;
  return <TitleContainer background={background}>{children}</TitleContainer>;
}
function ContainerIcon(props) {
  const { background, src, alt } = props;
  return <IconInfoExtraStyle background={background} src={src} alt={alt} />;
}

export { ContainerCard, ContainerInfoCard, ContainerTitleCard, ContainerIcon };
