import styled from "styled-components";

const StyledCircle = styled.i`
  font-size: 60px; /* adjust the font size as needed */
  transform: translateY(-20px);
  margin-right: ${(props) =>
    props.isActive ? "-20px" : "0"}; /* add margin between circles */
  color: ${(props) => (props.isActive ? "#ea001b" : " #f79f1ae0")};
`;

export { StyledCircle };
