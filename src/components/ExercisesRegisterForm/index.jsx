import { useState } from "react";
import { toast } from "react-toastify";
import usePostExercise from "../../hooks/api/usePostExercise";

export default function ExerciseRegisterForm() {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameExerc">
        Nome do Exercício:
        <input
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
        Parte do Corpo:
        <input
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
        Classificação:
        <input
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
      <button type="submit">Submit</button>
    </form>
  );
}
