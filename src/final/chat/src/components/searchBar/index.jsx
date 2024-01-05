import {
  StyledSearchBar,
  SearchBarContainer,
  ContactContainer,
} from "./styles.js";
import { ContactSearchBar } from "./Components/contac/index.jsx";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/data.mocks.jsx";
import { AppContext } from "../../context/index.jsx";
import { Search } from "./Components/search/index.jsx";
import { NewChat } from "./Components/newContac/index.jsx";

const SearchBar = () => {
  const { chatMocks, contactMocks, groupMocks } = useContext(DataContext);
  const { authUser, darkMode, language } = useContext(AppContext);
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
