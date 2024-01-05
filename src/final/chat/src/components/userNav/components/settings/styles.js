import styled from "styled-components";

const StyledContainerSettings = styled.div`
  display: flex;
  justify-content: space-between;

  i {
    display: flex;
    color: #fff;
  }

  p {
    font-size: 20px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
`;

const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;

  &:before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    bottom: 3px;
    background-color: #16172b;
    transition: 0.4s;
  }

  ${HiddenCheckbox}:checked + & {
    background-color: #2196f3;
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  ${HiddenCheckbox}:checked + &::before {
    transform: translateX(24px);
  }
`;

const RoundSlider = styled(Slider)`
  border-radius: 34px;

  &:before {
    border-radius: 50%;
  }
`;

const StyledSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export {
  StyledContainerSettings,
  StyledSwitch,
  HiddenCheckbox,
  Slider,
  RoundSlider,
  StyledSettings,
};
