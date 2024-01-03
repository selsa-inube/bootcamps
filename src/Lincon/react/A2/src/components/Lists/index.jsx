import { StyledBrowserOne } from "./styles";
function Lists({ items }) {
  return (
    <StyledBrowserOne>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </StyledBrowserOne>
  );
}
export { Lists };
