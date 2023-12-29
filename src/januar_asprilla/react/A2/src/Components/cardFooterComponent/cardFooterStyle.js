import { styled } from "styled-components";

const TitleCardStyle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.background};
`;
const TitleInfoExtraStyle = styled.span`
  font-weight: 100;
  font-size: 11px;
  color: gray;
  background-color: ${(props) => props.background};
`;
const InfoPreviwStyle = styled.p`
  font-size: 11px;
  margin-bottom: 10px;
  color: white;
  background-color: ${(props) => props.background};
`;
const IconInfoExtraStyle = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.background};
`;

export {
  TitleCardStyle,
  TitleInfoExtraStyle,
  InfoPreviwStyle,
  IconInfoExtraStyle,
};
