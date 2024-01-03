import styled from "styled-components";

const StyledLatestNewsArticles = styled.section`
  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }

  .article-info {
    display: flex;
    align-items: center;
    margin: 10px;
    margin-left: 0;
  }
  .article-info span {
    color: white;
    font-size: 0.6rem;
    background-color: black;
    padding: 10px;
    margin: 5px;
    margin-left: 0;
    font-weight: bold;
  }

  .article-info p {
    color: black;
    font-size: 0.6rem;
    padding: 10px;
    margin: 5px;
    margin-left: 0;
    font-weight: bold;
  }

  .article-info span {
    display: block;
  }
`;

export { StyledLatestNewsArticles };
