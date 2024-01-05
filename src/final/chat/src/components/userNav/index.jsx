import {
  StyledUserNav,
  StyledDataContainer,
  StyledConatinerSettings,
  StyledContainerP,
} from "./styles.js";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/index.jsx";
import { DataContext } from "../../context/data.mocks.jsx";
import { Profile } from "./components/profile/index.jsx";
import { Data } from "./components/data/index.jsx";
import { Settings } from "./components/settings/index.jsx";
import { Premium } from "./components/premium/index.jsx";

const UserNav = () => {
  const { authUser, darkMode, language } = useContext(AppContext);
  const { chatMocks, contactMocks, groupMocks } = useContext(DataContext);
  const informationData = [
    { label: "Phone", value: authUser.phone, iconClass: "fa fa-phone" },
    { label: "Username", value: authUser.username, iconClass: "fa fa-user" },
    { label: "Status", value: authUser.status, iconClass: "fa fa-info-circle" },
  ];
  return (
    <StyledUserNav>
      <Profile authUser={authUser} />
      <StyledDataContainer>
        {informationData.map((item) => (
          <Data
            key={item.label}
            label={item.label}
            value={item.value}
            iconClass={item.iconClass}
          />
        ))}
      </StyledDataContainer>
      <StyledConatinerSettings>
        <Settings iconClass="fa fa-cog" title="General Settings" link="#" />
        <Settings iconClass="fa fa-bell" title="Notifications" link="#" />
        <Settings
          iconClass="fa fa-lock"
          title="Privacy and Security"
          link="#"
        />
        <Settings iconClass="fa fa-language" title="Language" link="#" />
        <Settings iconClass="fa fa-moon" title="Dark Mode" link="#" />
      </StyledConatinerSettings>
      <StyledContainerP>
        <Premium />
      </StyledContainerP>
    </StyledUserNav>
  );
};

export default UserNav;
