import { useContext, useState } from "react";
import { toast } from "react-toastify";
import ExerciseContext from "../../../contexts/ExerciseContext";
import usePostExercise from "../../../hooks/api/usePostExercise";
import { InputData } from "../../GlobalComponentsStyles/styles";
import { ContainerLabel, Form } from "../formStyles";

export default function ExerciseRegisterForm() {
  const { getExercises } = useContext(ExerciseContext);

  const [dataExercise, setDataExercise] = useState({
    nameExerc: "",
    bodyPart: "",
    classification: "",
  });

  const { postExercise } = usePostExercise();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postExercise(dataExercise);
      getExercises();
      setDataExercise({
        nameExerc: "",
        bodyPart: "",
        classification: "",
      });
      toast.success("Exercício criado com sucesso!");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Nome do exercício já foi cadastrado!");
      }

      if (dataExercise.nameExerc === "" || dataExercise.bodyPart === "") {
        toast.warn("Por favor, preencha todos os dados!");
      } else {
        toast.error("Por favor, tente novamente!");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerLabel>
        <label htmlFor="nameExerc">
          <h1>Nome do Exercício:</h1>
          <InputData
            type="text"
            value={dataExercise.nameExerc}
            onChange={(event) =>
              setDataExercise({
                ...dataExercise,
                nameExerc: event.target.value,
              })
            }
          />
        </label>
        <label htmlFor="bodyPart">
          <h1>Parte do Corpo:</h1>
          <InputData
            type="text"
            value={dataExercise.bodyPart}
            onChange={(event) =>
              setDataExercise({
                ...dataExercise,
                bodyPart: event.target.value,
              })
            }
          />
        </label>
        <label htmlFor="classification">
          <h1>Classificação:</h1>
          <InputData
            type="text"
            value={dataExercise?.classification}
            onChange={(event) =>
              setDataExercise({
                ...dataExercise,
                classification: event.target.value,
              })
            }
          />
        </label>
      </ContainerLabel>
      <button type="submit">Cadastrar</button>
    </Form>
  );
}
