import { StyledContainer, StyledParagraph, StyledListOne } from "./styles";
import { Lists } from "../Lists";
function Nav() {
  const navItemsHeader = [
    { id: "tech", link: "#", label: "Tech" },
    { id: "econ", link: "#", label: "Econ" },
    { id: "media", link: "#", label: "Media" },
    { id: "money", link: "#", label: "Money" },
    { id: "dealBook", link: "#", label: "DealBook" },
  ];
  return (
    <StyledContainer>
      <StyledParagraph>Business</StyledParagraph>
      <StyledListOne>
        {/* Usa el componente Lists para la lista-1 */}
        <Lists items={navItemsHeader} />
      </StyledListOne>
    </StyledContainer>
  );
}
export { Nav };
