import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSignUp from "../../hooks/api/useSignUp";

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
    <div>
      <div>
        <form onSubmit={submit}>
          <input
            label="E-mail"
            type="text"
            value={dataUser.email}
            onChange={(event) => setDataUser({ ...dataUser, email: event.target.value })}
          />
          <input
            label="Senha"
            type="password"
            value={dataUser.password}
            onChange={(event) => setDataUser({ ...dataUser, password: event.target.value })}
          />
          <input
            label="Repita sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" color="primary" disabled={loadingSignUp}>
            Inscrever
          </button>
        </form>
      </div>
      <div>
        <Link to="/">Já está inscrito? Faça login</Link>
      </div>
    </div>
  );
}
