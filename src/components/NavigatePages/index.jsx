import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

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

const ContainerNavbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #000000;

  img {
    margin-left: 20px;
    width: 130px;
  }

  button {
    margin: 8px;
    display: inline-block;
    text-align: center;
    border: 1px solid hsl(83, 29%, 37%);
    text-transform: uppercase;
    font-weight: normal;
    font-family: sans-serif;
    color: #ffffff;
    font-size: 12px;
    background: #73b10e;
    text-shadow: 1px 1px 1px #365207;
    border-radius: 10px;
    padding: 7px 18px;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    button {
      padding: 5.5px 5px;
      font-size: 8px;
    }
  }
`;

const ContainerButtons = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 400px;
    flex-wrap: wrap;
  }
`;
