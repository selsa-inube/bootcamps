import { ItemContainer, ItemStyled } from "./itemStyle";

function ItemList(props) {
  const { label, href } = props;
  return (
    <ItemContainer>
      <ItemStyled href={href}> {label} </ItemStyled>
    </ItemContainer>
  );
}

export { ItemList };
