import styled from "styled-components";

export const ButtonSuccess = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #27ae60;
  display: flex;
  flex-direction: center;
  align-items: center;
  color: white;
  font-size: 16px;
  transition: 800ms;
  margin: 20px 0;
  svg {
    margin-right: 10px;
  }
  :hover {
    filter: brightness(90%);
  }
`;
export const ButtonPrimary = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #2980b9;
  display: flex;
  flex-direction: center;
  align-items: center;
  color: white;
  font-size: 16px;
  transition: 800ms;
  margin: 20px 0;
  svg {
    margin-right: 10px;
  }
  :hover {
    filter: brightness(90%);
  }
`;

export const ButtonDanger = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #c0392b;
  display: flex;
  flex-direction: center;
  align-items: center;
  color: white;
  font-size: 16px;
  transition: 800ms;
  margin: 20px 0;
  svg {
    margin-right: 10px;
  }
  :hover {
    filter: brightness(90%);
  }
`;

export const LinkDanger = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  color: #c0392b;
  margin-left: 10px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
