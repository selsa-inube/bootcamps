import { StiledImg } from "../../../chatsandgroups/styles";

const ContactSearchBar = ({ user }) => {
  return <StiledImg src={user.avatar} alt="image user" />;
};
export { ContactSearchBar };
