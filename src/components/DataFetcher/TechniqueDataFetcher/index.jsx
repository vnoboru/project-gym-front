import { useContext, useState } from "react";
import { toast } from "react-toastify";
import TechniqueContext from "../../../contexts/TechniqueContext";
import useDeleteTechnique from "../../../hooks/api/useDeleteTechnique";
import usePutTechnique from "../../../hooks/api/usePutTechnique";
import { InputData } from "../../GlobalComponentsStyles/styles";
import { ContainerData, ContainerIcons, ContainerInput, ContainerMain, ContainerTechnique } from "../dataStyles";

export default function TechniqueDataFetcher() {
  const { techniqueInfo } = useContext(TechniqueContext);
  const [data, setData] = useState(techniqueInfo);
  const [change, setChange] = useState({});

  const { putTechnique } = usePutTechnique();
  const { deleteTechnique } = useDeleteTechnique();

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    const techniqueIndex = data.findIndex((technique) => technique.id === id);
    if (techniqueIndex !== -1) {
      const newData = [...data];
      newData[techniqueIndex][name] = value;
      setChange(newData[techniqueIndex]);
      setData(newData);
    }
  };

  async function handleTechniqueChange() {
    try {
      await putTechnique(change, change.id);
      toast.success("Técnica alterada com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao alterar!");
    }
  }

  async function removeTechnique(techniqueId) {
    try {
      await deleteTechnique(techniqueId);
      window.location.reload();
      toast.success("Exercício deletado com sucesso!");
    } catch (error) {
      toast.error(`Ocorreu um erro ao deletar!`);
    }
  }

  return (
    <ContainerTechnique>
      <ContainerMain />
      {data
        .sort((a, b) => a.id - b.id)
        .map((technique) => (
          <ContainerData key={technique.id}>
            <ContainerInput>
              <h1>Técnica:</h1>
              <InputData
                name="nameTechnique"
                value={technique.nameTechnique || ""}
                onChange={(event) => handleInputChange(event, technique.id)}
              />
            </ContainerInput>
            <ContainerInput>
              <h1>Descrição:</h1>
              <InputData
                name="description"
                value={technique.description || ""}
                onChange={(event) => handleInputChange(event, technique.id)}
              />
            </ContainerInput>
            <ContainerInput>
              <h1>Número de séries:</h1>
              <InputData
                name="numberSeries"
                value={technique.numberSeries || ""}
                onChange={(event) => handleInputChange(event, technique.id)}
              />
            </ContainerInput>
            <ContainerInput>
              <h1>Número de repetições:</h1>
              <InputData
                name="numberRep"
                value={technique.numberRep || ""}
                onChange={(event) => handleInputChange(event, technique.id)}
              />
            </ContainerInput>
            <ContainerIcons>
              <ion-icon onClick={handleTechniqueChange} name="send-outline" />
              <ion-icon onClick={() => removeTechnique(technique.id)} name="trash-outline" />
            </ContainerIcons>
          </ContainerData>
        ))}
    </ContainerTechnique>
  );
}
