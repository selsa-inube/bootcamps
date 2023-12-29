import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem 1rem;
  margin-top: 25px;
  border-top: 1px solid rgb(184, 184, 184);
`;

const FooterHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr 2fr;
  gap: 10px;
  align-items: center;
`;

const InforFooter = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${(props) => props.background};
  align-items: center;
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
  position: relative;
  padding: 15px;
  background-color: ${(props) => props.background};
  max-width: 250px;
`;
const InfoCard = styled.div`
  background-color: ${(props) => props.background};
  max-width: 250px;
`;
const IconInfoExtraStyle = styled.img`
  margin-right: 5px;
  background-color: ${(props) => props.background};
  color: white;
  height: 10px;
  width: 10px;
`;

export {
  FooterContainer,
  FooterHeader,
  InforFooter,
  CardContainer,
  InfoCard,
  TitleContainer,
  IconInfoExtraStyle,
};
