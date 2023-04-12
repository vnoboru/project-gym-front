import { useNavigate } from "react-router-dom";

export default function NavigatePages() {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
}
