import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  img {
    width: 100%;
    height: 480px;
    object-fit: contain;
    border-radius: 25px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Article = styled.article`
  margin-left: 15px;
  padding: 20px 10px;
  h1 {
    font-size: 38px;
  }
  p {
    font-size: 16px;
    margin-top: 18px;
  }
`;
