import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

import { useAuth } from "../../contexts/authContext";

import { LinkDanger } from "../../styles/button";
import { Profile, Logo, Header } from "./styled";

import logo from "../../assets/logo.svg";

const HeaderComponent = () => {
  const [name, setName] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@R:user"));
    setName(user.name);
  }, []);

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <Header>
      <Logo>
        <img src={logo} alt="logo" />
        <strong>Nex Frontend</strong>
      </Logo>
      <Profile>
        <img
          src="https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg"
          alt="profile"
        />
        <div className="content">
          <p>
            Olá, <strong>{name}</strong>
          </p>
          <LinkDanger onClick={() => handleSignOut()}>
            <FiLogOut /> Sair
          </LinkDanger>
        </div>
      </Profile>
    </Header>
  );
};

export default HeaderComponent;
