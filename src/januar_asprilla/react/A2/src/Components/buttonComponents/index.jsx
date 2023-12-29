import {
  ButtonStyled,
  ButtonNotice,
  CategoryStyled,
  FooterExtras,
} from "./buttonStyled";

function Button(props) {
  const { label, border = false } = props;
  return <ButtonStyled border={border}>{label}</ButtonStyled>;
}

function NoticeExtra(props) {
  const { label } = props;
  return <ButtonNotice>{label}</ButtonNotice>;
}
function Categorys(props) {
  const { label, color = false, background = false } = props;
  return (
    <CategoryStyled color={color} background={background}>
      {label}
    </CategoryStyled>
  );
}
function ButtonFooter(props) {
  const { label } = props;
  return <FooterExtras>{label}</FooterExtras>;
}

export { Button, NoticeExtra, Categorys, ButtonFooter };
