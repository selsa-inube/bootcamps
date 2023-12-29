import {
  TitleCardStyle,
  TitleInfoExtraStyle,
  InfoPreviwStyle,
  IconInfoExtraStyle,
} from "./cardFooterStyle";

function TitleCards(props) {
  const { label, background } = props;
  return <TitleCardStyle background={background}>{label}</TitleCardStyle>;
}
function TitleInfoExtra(props) {
  const { label, background } = props;
  return (
    <TitleInfoExtraStyle background={background}>{label}</TitleInfoExtraStyle>
  );
}
function InfoPreviw(props) {
  const { label, background } = props;
  return <InfoPreviwStyle background={background}> {label}</InfoPreviwStyle>;
}
function IconInfoExtra(props) {
  const { label, background } = props;
  return (
    <IconInfoExtraStyle background={background}>{label}</IconInfoExtraStyle>
  );
}
export { TitleCards, TitleInfoExtra, InfoPreviw, IconInfoExtra };
