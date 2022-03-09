import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Element = styled.div`
  background-color: #fff;
  border-radius: 18px;
  margin: 8px 10px;
  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }
  .content {
    padding: 15px;
    strong {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
    button {
      float: right;
    }
    .clear {
      clear: both;
    }
  }
`;
