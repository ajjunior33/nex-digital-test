import { FiLogIn } from "react-icons/fi";

import { Content, Title, CreateAccount } from "./styled";
import { FormGroup, InputControl } from "../../styles/form";
import { ButtonSuccess } from "../../styles/button";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  async function handleSignIn() {
    console.log(email, password);
    await signIn(email, password);
  }

  return (
    <>
      <Content>
        <Title>Faça Login</Title>
        <FormGroup>
          <label>E-mail</label>
          <InputControl
            type="email"
            placeholder="seumelhor@emai.com"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Senha</label>
          <InputControl
            type="password"
            placeholder="************"
            required="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <ButtonSuccess onClick={handleSignIn}>
          <FiLogIn />
          Acessar minha conta
        </ButtonSuccess>
        <CreateAccount to="/create-account">
          Não tem uma conta? <strong>Crie agora mesmo</strong>
        </CreateAccount>
      </Content>
    </>
  );
};

export default SignIn;
