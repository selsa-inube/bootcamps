import styled from "styled-components";

const StyledCardPizza = styled.div`
  display: flex;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
`;

const StyledImg = styled.img`
  width: 40%;
  object-fit: cover;

  border-radius: 20px 0 0 20px;
`;

const StyledConatinerItems = styled.div`
  width: 20%;
  border-right: 1px solid #b9b4b4;
`;

const StyledCardText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 30px;
  margin-bottom: 100px;
`;

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

export {
  StyledCardPizza,
  StyledImg,
  StyledConatinerItems,
  StyledCardText,
  StyledSelect,
};
