import { useContext, useState } from "react";
import { toast } from "react-toastify";
import ExerciseContext from "../../../contexts/ExerciseContext";
import useDeleteExercise from "../../../hooks/api/useDeleteExercise";
import usePutExercise from "../../../hooks/api/usePutExercise";
import { InputData } from "../../GlobalComponentsStyles/styles";
import { ContainerData, ContainerExercise, ContainerIcons, ContainerMain } from "../dataStyles";

export default function ExerciseDataFetcher() {
  const { exercisesInfo } = useContext(ExerciseContext);
  const [data, setData] = useState(exercisesInfo);
  const [change, setChange] = useState({});

  const { putExercise } = usePutExercise();
  const { deleteExercise } = useDeleteExercise();

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    const exerciseIndex = data.findIndex((exercise) => exercise.id === id);
    if (exerciseIndex !== -1) {
      const newData = [...data];
      newData[exerciseIndex][name] = value;
      setChange(newData[exerciseIndex]);
      setData(newData);
    }
  };

  async function handleExerciseChange() {
    try {
      await putExercise(change, change.id);
      toast.success("Exercício alterado com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao alterar!");
    }
  }

  async function removeExercise(exercId) {
    try {
      await deleteExercise(exercId);
      window.location.reload();
      toast.success("Exercício deletado com sucesso!");
    } catch (error) {
      toast.error(`Ocorreu um erro ao deletar!`);
    }
  }

  return (
    <ContainerExercise>
      <ContainerMain>
        <h1>Exercícios</h1>
        <h1>Parte do Corpo</h1>
        <h1>Classificação</h1>
      </ContainerMain>
      {data
        .sort((a, b) => a.id - b.id)
        .map((exercise) => (
          <ContainerData key={exercise.id}>
            <InputData
              name="nameExerc"
              value={exercise.nameExerc}
              onChange={(event) => handleInputChange(event, exercise.id)}
            />
            <InputData
              name="bodyPart"
              value={exercise.bodyPart}
              onChange={(event) => handleInputChange(event, exercise.id)}
            />
            <InputData
              name="classification"
              value={exercise.classification || ""}
              onChange={(event) => handleInputChange(event, exercise.id)}
            />
            <ContainerIcons>
              <ion-icon onClick={handleExerciseChange} name="send-outline" />
              <ion-icon onClick={() => removeExercise(exercise.id)} name="trash-outline" />
            </ContainerIcons>
          </ContainerData>
        ))}
    </ContainerExercise>
  );
}
