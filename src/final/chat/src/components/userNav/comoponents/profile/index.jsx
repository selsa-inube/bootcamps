import {
  StyledContainerProfile,
  StyledContainerImage,
  StyledContainerDate,
} from "./styles.js";

const Profile = ({ authUser }) => {
  return (
    <StyledContainerProfile>
      <StyledContainerImage>
        <img src={authUser.avatar} alt="avatar image" />
        <i className="fa fa-camera" aria-hidden="true"></i>
      </StyledContainerImage>
      <StyledContainerDate>
        <p>{authUser.name}</p>
        <p>{authUser.status}</p>
      </StyledContainerDate>
    </StyledContainerProfile>
  );
};

export { Profile };
