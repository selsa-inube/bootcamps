import styled from "styled-components";
const BackgroundContainer = styled.div`
  background-color: #f4f9fb;
  margin: 0;
  padding: 15vh 25vw;
  height: 100vh;
`;
const EcommerceContainer = styled.div`
  display: grid;
  gap: 15px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid #d5d8db;
  box-shadow: 0px 0px 80px -30px gray;
  font-family: "Arial Narrow", Arial, sans-serif;
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 20px 10px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-family: "Arial Narrow", Arial, sans-serif;
  margin-bottom: 10px;
`;
const TextTitle = styled.p`
  font-size: 20px;
  font-family: "Arial Narrow", Arial, sans-serif;
  color: #616161;
  margin-bottom: 10px;
`;
const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  background-color: ${(props) => {
    switch (props.size) {
      case "small":
        return "#cad6fb";
      case "medium":
        return "transparent";
      case "large":
        return "#f5f1f1";
      default:
        return "transparent";
    }
  }};
  padding: ${(props) => (props.hasPadding ? " 20px 20px" : "15px 20px")}; //
  border: ${(props) => (props.hasBorder ? " none" : "1px solid #b9b4b4")};
  gap: ${(props) => (props.hasGap ? "0" : "20px")};
  border-radius: 15px;
  font-family: "Arial Narrow", Arial, sans-serif;
`;
const OfferContainer = styled.p`
  font-size: 18px;
  font-weight: lighter;
  margin-top: 15px;
`;
const PriceContainer = styled.i`
  color: #575966;
  margin-right: 22px;
`;
const PercentContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  gap: 10px;
`;
export {
  Title,
  TextTitle,
  IconsContainer,
  BackgroundContainer,
  EcommerceContainer,
  ContainerProduct,
  OfferContainer,
  PriceContainer,
  PercentContainer,
};
