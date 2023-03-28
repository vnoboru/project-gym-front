import { useContext, useState } from "react";
import ExerciseContext from "../../../contexts/ExerciseContext";
import { InputData } from "../../GlobalComponentsStyles/styles";
import { ContainerData, ContainerIcons, ContainerMain } from "../dataStyles";

export default function ExerciseDataFetcher() {
  const { exercisesInfo } = useContext(ExerciseContext);
  const [data, setData] = useState(exercisesInfo);

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    const exerciseIndex = data.findIndex((exercise) => exercise.id === id);
    if (exerciseIndex !== -1) {
      const newData = [...data];
      newData[exerciseIndex][name] = value;
      setData(newData);
    }
  };

  return (
    <>
      {" "}
      <ContainerMain>
        <h1>Exercícios</h1>
        <h1>Parte do Corpo</h1>
        <h1>Classificação</h1>
      </ContainerMain>
      {data.map((exercise) => (
        <ContainerData>
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
            value={exercise.classification}
            onChange={(event) => handleInputChange(event, exercise.id)}
          />
          <ContainerIcons>
            <ion-icon name="send-outline" />
            <ion-icon name="trash-outline" />
          </ContainerIcons>
        </ContainerData>
      ))}
    </>
  );
}
