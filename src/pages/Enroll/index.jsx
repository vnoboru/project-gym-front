import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import useSignUp from "../../hooks/api/useSignUp";
import { ContainerData, ContainerImage, ContainerScreen, SidebarLogo, StyledLink } from "../globalStylesPages";

export default function Enroll() {
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loadingSignUp, signUp } = useSignUp();
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();

    if (dataUser.password !== confirmPassword) {
      toast.warning("As senhas devem ser iguais!");
    } else {
      try {
        await signUp(dataUser);
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/");
      } catch (error) {
        toast.error("Não foi possível fazer o cadastro!");
      }
    }
  };

  return (
    <ContainerScreen>
      <ContainerImage>
        <img src={logo} alt="logo" />
      </ContainerImage>
      <ContainerData>
        <form onSubmit={submit}>
          <input
            label="E-mail"
            type="email"
            placeholder="Email"
            value={dataUser.email}
            onChange={(event) => setDataUser({ ...dataUser, email: event.target.value })}
          />
          <input
            label="Senha"
            type="password"
            placeholder="Senha"
            value={dataUser.password}
            onChange={(event) => setDataUser({ ...dataUser, password: event.target.value })}
          />
          <input
            label="Repita sua senha"
            type="password"
            placeholder="Repita a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" color="primary" disabled={loadingSignUp}>
            Inscrever
          </button>
        </form>{" "}
        <StyledLink to="/">Já está inscrito? Faça login</StyledLink>
      </ContainerData>
      <SidebarLogo>
        <img src={logo} alt="logo" />
      </SidebarLogo>
    </ContainerScreen>
  );
}
