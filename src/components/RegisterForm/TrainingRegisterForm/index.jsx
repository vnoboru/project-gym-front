import { useState } from "react";
import { toast } from "react-toastify";
import usePostTraining from "../../../hooks/api/usePostTraining";
import { ContainerLabel, Form } from "../formStyles";

export default function TrainingRegisterForm() {
  const [dataTraining, setDataTraining] = useState({
    nameTraining: "",
  });

  const { postTraining } = usePostTraining();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postTraining(dataTraining);
      setDataTraining({
        nameTraining: "",
      });

      toast.success("Nome de treino criado com sucesso!");
    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("Erro de conexão!");
      }

      if (error.response.status === 409) {
        toast.error("Nome de treino já foi cadastrado!");
      } else {
        toast.error("Por favor, tente novamente!");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerLabel>
        <label htmlFor="nameTraining">
          <h1>Nome do Treino:</h1>
          <input
            type="text"
            value={dataTraining.nameTraining}
            onChange={(event) =>
              setDataTraining({
                ...dataTraining,
                nameTraining: event.target.value,
              })
            }
          />
        </label>
      </ContainerLabel>
      <button type="submit">Submit</button>
    </Form>
  );
}
