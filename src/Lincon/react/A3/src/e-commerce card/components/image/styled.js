import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 10px;
  width: ${(props) => (props.size === "small" ? "80px" : "90px")};
  box-shadow: ${(props) =>
    props.size === "small"
      ? "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;"
      : " rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;"};
`;
export { StyledImage };
