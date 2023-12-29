import { StyledBrowserOne } from "./styles";
function Lists({ items }) {
  return (
    <StyledBrowserOne>
      {/* Mapear el array de elementos en JSX */}
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </StyledBrowserOne>
  );
}
export { Lists };
