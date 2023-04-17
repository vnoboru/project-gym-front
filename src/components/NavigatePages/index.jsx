import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ContainerButtons, ContainerNavbar } from "./navigateStyles";

export default function NavigatePages() {
  const navigate = useNavigate();
  return (
    <ContainerNavbar>
      <img src={logo} alt="logo" />
      <ContainerButtons>
        <button type="button" onClick={() => navigate("/dashboard")}>
          Home
        </button>
        <button type="button" onClick={() => navigate("/dashboard/exercise")}>
          Exercicio
        </button>
        <button type="button" onClick={() => navigate("/dashboard/technique")}>
          Técnica
        </button>
        <button type="button" onClick={() => navigate("/dashboard/training")}>
          Treino
        </button>
      </ContainerButtons>
      <button type="button">Sair</button>
    </ContainerNavbar>
  );
}
