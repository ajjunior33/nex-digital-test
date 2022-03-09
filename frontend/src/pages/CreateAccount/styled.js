import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  border-radius: 8px;
  background-color: #fff;
  max-width: 640px;
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Title = styled.h1`
  text-align: center;
  margin: 10px 0;
`;

export const LoginAcess = styled(Link)`
  color: #000;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin: 10px 0;
  :hover {
  }
  strong {
    color: #3498db;
    :hover {
      text-decoration: underline;
    }
  }
`;
