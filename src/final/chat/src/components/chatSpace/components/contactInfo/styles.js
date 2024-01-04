import styled from "styled-components";

const StyledContactInfo = styled.section`
  width: 40%;
  > img {
    float: left;
    width: 40px;
    border-radius: 50%;
    margin: 5px 10px;
  }
  > p {
    color: #988f8f;
    font-size: 1rem;
    text-align: left;
    line-height: 1.2em;
    margin-left: 5px;
  }
  > p:first-of-type {
    color: black;
    font-size: 1.2rem;
    margin-top: 7.5px;
  }
`;

export { StyledContactInfo };
