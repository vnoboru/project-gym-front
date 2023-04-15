import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import useSignIn from "../../hooks/api/useSignIn";

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
        console.log("vai acessar outra página");
      }
    } catch (err) {
      toast.error("Não foi possível fazer o login!");
    }
  }
  return (
    <div>
      <ContainerLogin>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" onChange={(e) => setEmail(e.target.value)} />
          <input label="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" color="primary" disabled={loadingSignIn}>
            Entrar
          </button>
        </form>
      </ContainerLogin>
      <div>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </div>
    </div>
  );
}

const ContainerLogin = styled.div``;
