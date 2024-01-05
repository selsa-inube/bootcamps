import {
  ContainerSearch,
  InputSearch,
  TextSearch,
  IconSearch,
} from "./StyledSearch";

function Search() {
  return (
    <ContainerSearch>
      <InputSearch placeholder="Search" type="text" />
      <IconSearch className="fas fa-search"></IconSearch>
    </ContainerSearch>
  );
}
export { Search };
