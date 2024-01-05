import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;

  > button {
    background-color: var(--purple-col);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > button i {
    color: white;
    font-size: 1.3rem;
  }
  div {
    width: calc(100% - 50px);
    background-color: #f9f9f9;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div input[type="text"] {
    min-width: 300px;
    width: calc(100% - 80px);
    border: none;
    background-color: transparent;
    line-height: 2em;
    padding-left: 5px;
    color: #000;
  }

  div input[type="text"]:focus {
    outline: none;
  }
  div button {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 30px;
    margin: 0 5px;
  }
  div button i {
    padding: 0 auto;
    font-size: 0.8rem;
  }

  div button:first-of-type i {
    color: #756a6a;
  }
`;

export { StyledForm };
