import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 380px;
  margin: 8px 0;
  label {
    font-size: 16px;
    margin: 5px 0px;
  }
`;
export const InputControl = styled.input`
  border: none;
  padding: 10px 5px;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background-color: #f3f3f3;
  font-size: 16px;
`;
