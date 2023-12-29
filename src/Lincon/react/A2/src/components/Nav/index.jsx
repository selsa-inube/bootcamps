import { StyledContainer, StyledParrafo, StyledListOne } from "./styles";
import { Lists } from "../Lists";
function Nav() {
  const navItemsHeader = [
    { link: "#", label: "Tech" },
    { link: "#", label: "Econ" },
    { link: "#", label: "Media" },
    { link: "#", label: "Money" },
    { link: "#", label: "DealBook" },
  ];
  return (
    <StyledContainer>
      <StyledParrafo>Business</StyledParrafo>
      <StyledListOne>
        {/* Usa el componente Lists para la lista-1 */}
        <Lists items={navItemsHeader} />
      </StyledListOne>
    </StyledContainer>
  );
}
export { Nav };
