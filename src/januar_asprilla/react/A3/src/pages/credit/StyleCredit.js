import styled from "styled-components";
const BackgroundContainer = styled.div`
  background-color: #131e47;
  margin: 0;
  padding: 20vh 0;
  height: 100vh;
`;
const CreditContainer = styled.div`
  margin: 0 auto;
  width: 550px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  position: relative;
`;

const ExpireContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 210px;
  align-items: center;
  color: #160039;
  gap: 3px;
`;

const ExprireText = styled.p`
  text-align: end;
  width: 50px;
  font-size: 10px;
  color: #1e2d4f;
`;
const ExprireDate = styled.p`
  display: flex;
  text-align: start;
  font-size: 30px;
  font-family: Courier New;
  color: #160039;
`;

const NameCard = styled.p`
  font-family: Courier New;
  font-size: 25px;
  color: #160039;
  margin: 12px 0 0;
  padding: 0 35px;
`;

export {
  BackgroundContainer,
  CreditContainer,
  ExpireContainer,
  ExprireText,
  ExprireDate,
  NameCard,
};
