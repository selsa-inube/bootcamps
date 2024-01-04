import styled from "styled-components";

const StyledContactInfo = styled.section`
  width: 40%;
  > img {
    float: left;
    width: 50px;
  }
  > p {
    color: #988f8f;
    font-size: 0.7rem;
    text-align: left;
  }
  > p:first-of-type {
    color: black;
    font-size: 1rem;
  }
`;

export { StyledContactInfo };
