import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 40px;
  background-color: #fff;
  width: 60%;
  border-radius: 20px;
`;

const StyledMain = styled.div`
  display: flex;

  justify-content: space-between;
  margin-top: 30px;
`;

const StyledIcon = styled.i`
  color: #b9b4b4;
  cursor: pointer;
  font-size: 30px;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledTitle = styled.h1`
  font-size: 35px;
`;

const StyledSubtitle = styled.p`
  font-size: 18px;
  color: #797b86;
`;

const StyledFile = styled.div`
  display: flex;
  background-color: ${(props) => {
    switch (props.size) {
      case "small":
        return "rgb(170 58 255 / 59%)";
      case "medium":
        return "transparent";
      case "large":
        return "#f5f1f1";
      default:
        return "transparent";
    }
  }};
  padding: ${(props) => (props.hasPadding ? " 20px 20px" : "30px 20px")}; //
  border: ${(props) => (props.hasBorder ? " none" : "1px solid #b9b4b4")};
  gap: ${(props) => (props.hasGap ? "0" : "20px")};
  border-radius: 15px;
`;

const StyledOffer = styled.p`
  font-size: 16px;
`;

const StyledMoney = styled.i`
  color: #575966;
  margin-right: 20px;
`;

const StyledConatinerPercentage = styled.div`
  display: flex;
  gap: 10px;
`;
export {
  StyledCard,
  StyledMain,
  StyledIcon,
  StyledText,
  StyledTitle,
  StyledSubtitle,
  StyledFile,
  StyledOffer,
  StyledMoney,
  StyledConatinerPercentage,
};
