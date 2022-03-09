import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import { Content, Title, LoginAcess } from "./styled";
import { FormGroup, InputControl } from "../../styles/form";
import { ButtonSuccess } from "../../styles/button";

const CreateAccount = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleCreateAccount() {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
      toast.success("Usuário cadastrado com sucesso.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <>
      <Content>
        <Title>Criar uma conta</Title>
        <FormGroup>
          <label>Nome Completo</label>
          <InputControl
            type="text"
            placeholder="João da Silva"
            required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

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

        <ButtonSuccess onClick={() => handleCreateAccount()}>
          <FiLogIn />
          Criar minha conta
        </ButtonSuccess>
        <LoginAcess to="/">
          Já tem uma conta? <strong>Fazer login</strong>
        </LoginAcess>
      </Content>
    </>
  );
};

export default CreateAccount;
