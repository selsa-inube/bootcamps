import styled from "styled-components";

const StyledContainerImage = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 3px solid #fff;
  position: relative;
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
  i {
    font-size: 18px;
    background-color: #fff;
    border-radius: 50%;
    padding: 3px;
    position: absolute;
    top: 50px;
    left: 50px;
  }
`;

const StyledContainerDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p:nth-of-type(1) {
    font-size: 20px;
    color: #fff;
  }
  p:nth-of-type(2) {
    color: #9d9d9d;
  }
`;

const StyledContainerProfile = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export { StyledContainerImage, StyledContainerDate, StyledContainerProfile };
