import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 700px;
  position: relative;
`;
const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #e0d9d9;
  padding: 10px 30px;
  gap: 20px;
`;
const Button = styled.button`
  border: none;
  color: #505050;
  font-size: 15px;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 6px;
`;
const ContainerDatos = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    gap: 20px;
  }
  li a {
    color: #505050;
    text-decoration: none;
  }
  li a:hover {
    border-bottom: 1px solid #919191;
  }
`;
export { Container, Container2, Button, ContainerDatos };
