import { useContext, useState } from "react";
import { toast } from "react-toastify";
import TrainingContext from "../../../contexts/TrainingContext";
import useDeleteTraining from "../../../hooks/api/useDeleteTraining";
import usePutTraining from "../../../hooks/api/usePutTraining";
import { InputData } from "../../GlobalComponentsStyles/styles";
import { ContainerData, ContainerIcons, ContainerMain, ContainerTraining } from "../dataStyles";

export default function TrainingDataFetcher() {
  const { trainingInfo } = useContext(TrainingContext);
  const [data, setData] = useState(trainingInfo);
  const [change, setChange] = useState({});

  const { putTraining } = usePutTraining();
  const { deleteTraining } = useDeleteTraining();

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    const trainingIndex = data.findIndex((training) => training.id === id);
    if (trainingIndex !== -1) {
      const newData = [...data];
      newData[trainingIndex][name] = value;
      setChange(newData[trainingIndex]);
      setData(newData);
    }
  };

  async function handleTrainingChange() {
    try {
      await putTraining(change, change.id);
      toast.success("Técnica alterada com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao alterar!");
    }
  }

  async function removeTraining(trainingId) {
    try {
      await deleteTraining(trainingId);
      window.location.reload();
      toast.success("Exercício deletado com sucesso!");
    } catch (error) {
      toast.error(`Ocorreu um erro ao deletar!`);
    }
  }

  return (
    <ContainerTraining>
      <ContainerMain>
        <h1>Treino</h1>
      </ContainerMain>
      {data
        .sort((a, b) => a.id - b.id)
        .map((training) => (
          <ContainerData key={training.id}>
            <InputData
              name="nameTraining"
              value={training.nameTraining || ""}
              onChange={(event) => handleInputChange(event, training.id)}
            />
            <ContainerIcons>
              <ion-icon onClick={handleTrainingChange} name="send-outline" />
              <ion-icon onClick={() => removeTraining(training.id)} name="trash-outline" />
            </ContainerIcons>
          </ContainerData>
        ))}
    </ContainerTraining>
  );
}
