import styled from "styled-components";

const DateDay = styled.p`
  font-size: ${(props) => (props.size === true ? "15px" : "14px")};
  font-weight: ${(props) => (props.shape === true ? "bolder" : "lighter")};
  margin-bottom: 3px;
`;

export { DateDay };
