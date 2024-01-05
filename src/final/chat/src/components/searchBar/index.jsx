import {
  StyledSearchBar,
  SearchBarContainer,
  ContactContainer,
} from "./styles.js";
import { ContactSearchBar } from "./Components/contact";
import { useContext } from "react";
import { DataContext } from "../../context/data.mocks.jsx";
import { AppContext } from "../../context";
import { Search } from "./Components/search";
import { NewChat } from "./Components/newContact";

const SearchBar = () => {
  const { contactMocks } = useContext(DataContext);
  const { authUser } = useContext(AppContext);
  return (
    <StyledSearchBar>
      <ContactContainer>
        <SearchBarContainer>
          {contactMocks
            .filter((contact) => contact.id !== authUser.id)
            .map((contact) => (
              <ContactSearchBar key={contact.id} user={contact} />
            ))}
        </SearchBarContainer>
        <Search />
        <NewChat />
      </ContactContainer>
    </StyledSearchBar>
  );
};

export default SearchBar;
