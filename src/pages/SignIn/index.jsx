import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import UserContext from "../../contexts/UserContext";
import useSignIn from "../../hooks/api/useSignIn";
import { ContainerData, ContainerImage, ContainerScreen, SidebarLogo, StyledLink } from "../globalStylesPages";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast.success("Login realizado com sucesso!");
      if (email === "admin@admin.com") {
        navigate("/dashboard");
      } else {
        navigate("/mypainel");
      }
    } catch (err) {
      toast.error("Não foi possível fazer o login!");
    }
  }
  return (
    <ContainerScreen>
      <ContainerImage>
        <img src={logo} alt="logo" />
      </ContainerImage>
      <ContainerData>
        <form onSubmit={submit}>
          <input label="E-mail" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input label="Senha" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" color="primary" disabled={loadingSignIn}>
            Entrar
          </button>
        </form>
        <StyledLink to="/enroll">Não possui login? Inscreva-se</StyledLink>
      </ContainerData>
      <SidebarLogo>
        <img src={logo} alt="logo" />
      </SidebarLogo>
    </ContainerScreen>
  );
}
