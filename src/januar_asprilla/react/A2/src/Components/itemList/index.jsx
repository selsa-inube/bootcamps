import { ItemContainer, ItemStyled } from "./StyledItem";

function ItemList(props) {
  const { label, href } = props;
  return (
    <ItemContainer>
      <ItemStyled href={href}> {label} </ItemStyled>
    </ItemContainer>
  );
}

export { ItemList };
