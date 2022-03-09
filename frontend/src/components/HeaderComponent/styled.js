import styled from "styled-components";
export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 46px;
    heigth: 46px;
    border-radius: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    aling-items: center;
    p {
      margin-left: 10px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 30px;
  width: 100%;
`;
