/* eslint-disable react/no-array-index-key */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import ExerciseContext from "../../contexts/ExerciseContext";
import TechniqueContext from "../../contexts/TechniqueContext";
import useListExerc from "../../hooks/api/useFilterExercise";
import useListTech from "../../hooks/api/useFilterTechnique";
import usePostList from "../../hooks/api/usePostList";
import { InputData } from "../GlobalComponentsStyles/styles";
import { ContainerLabel } from "../RegisterForm/formStyles";
import DataSelect from "./DataSelect";
import { ContainerDataSelect, ContainerSelect } from "./stylesFilter";

export default function DataFilter() {
  const { exercisesInfo } = useContext(ExerciseContext);
  const { techniqueInfo } = useContext(TechniqueContext);

  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedNameTechnique, setSelectedNameTechnique] = useState("");
  const [listTraining, setListTraining] = useState(false);

  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedTechniques, setSelectedTechniques] = useState([]);

  const [trainingId, setTrainingId] = useState("");
  const [trainingDays, setTrainingDays] = useState("");

  const bodyParts = [...new Set(exercisesInfo.map((e) => e.bodyPart))];
  const nameTechniques = [...new Set(techniqueInfo.map((t) => t.nameTechnique))];

  const { filterExerc, getFilterExerc } = useListExerc();
  const { filterTech, getFilterTech } = useListTech();

  const { postList } = usePostList();

  const handleFilter = () => {
    if (selectedBodyPart === "" || selectedNameTechnique === "") {
      toast.error("erro");
    } else {
      getFilterExerc(String(selectedBodyPart));
      getFilterTech(String(selectedNameTechnique));
    }
  };

  const handleAddExerc = (e) => {
    const alreadySelected = selectedExercises.some((ex) => ex.id === e.id);
    if (alreadySelected) {
      toast.error("Este exercício já foi selecionado.");
      return;
    }
    setSelectedExercises((prevExercises) => [...prevExercises, e]);
    setListTraining(true);
  };

  const handleAddTech = (t) => {
    setSelectedTechniques((prevTechniques) => [...prevTechniques, t]);
    setListTraining(true);
  };

  const handleAddToTraining = async (event) => {
    event.preventDefault();

    if (selectedExercises.length === 0 || selectedTechniques.length === 0) {
      toast.error("Adicione pelo menos um exercício e uma técnica.");
    } else if (selectedExercises.length !== selectedTechniques.length) {
      toast.error("O número de exercícios e técnicas selecionados deve ser igual.");
    }

    const trainingObjects = selectedExercises.map((e, index) => ({
      idExerc: e.id,
      idTechnique: selectedTechniques[index].id,
      daysTraining: Number(trainingDays),
      idTraining: Number(trainingId),
    }));

    try {
      await postList(trainingObjects);
      toast.success("Lista de treino criado com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch {
      toast.error("Ocorreu algum erro!");
    }
  };

  return (
    <ContainerDataFilter>
      <ContainerLabel>
        <label htmlFor="nameTraining">
          <h1>Nome do treino:</h1>
          <InputData type="text" value={trainingId} onChange={(e) => setTrainingId(e.target.value)} />
        </label>
        <label htmlFor="daysTraining">
          <h1>Dias de treino:</h1>
          <InputData type="text" value={trainingDays} onChange={(e) => setTrainingDays(e.target.value)} />
        </label>
      </ContainerLabel>
      <ContainerDataSelect>
        <ContainerSelect>
          <h1>Parte do corpo:</h1>
          <select value={selectedBodyPart} onChange={(e) => setSelectedBodyPart(e.target.value)}>
            <option>Selecione uma opção</option>
            {bodyParts.map((bodyPart) => (
              <option key={bodyPart}>{bodyPart}</option>
            ))}
          </select>
        </ContainerSelect>
        <ContainerSelect>
          <h1>Nome da técnica:</h1>
          <select value={selectedNameTechnique} onChange={(e) => setSelectedNameTechnique(e.target.value)}>
            <option>Selecione uma opção</option>
            {nameTechniques.map((nameTechnique) => (
              <option key={nameTechnique}>{nameTechnique}</option>
            ))}
          </select>
        </ContainerSelect>
        <button type="button" onClick={handleFilter}>
          Filtrar
        </button>
      </ContainerDataSelect>
      <ContainerMainFilter>
        <ContainerFilter>
          {filterExerc && (
            <>
              <h3>Exercícios:</h3>
              <div>
                {filterExerc.map((exercise) => (
                  <ul>
                    <li key={exercise.id}>{exercise.nameExerc}</li>
                    <button type="button" onClick={() => handleAddExerc(exercise)}>
                      Adicionar
                    </button>
                  </ul>
                ))}
              </div>
            </>
          )}
        </ContainerFilter>
        <ContainerFilter>
          {filterTech && (
            <>
              <h3>Técnica:</h3>
              <div>
                <ul>
                  {filterTech.map((technique) => (
                    <>
                      <li key={technique.id}>{technique.nameTechnique}</li>
                      <button type="button" onClick={() => handleAddTech(technique)}>
                        Adicionar
                      </button>
                    </>
                  ))}
                </ul>
              </div>
            </>
          )}
        </ContainerFilter>
      </ContainerMainFilter>
      <DataSelect
        selectedExercises={selectedExercises}
        selectedTechniques={selectedTechniques}
        listTraining={listTraining}
      />
      {selectedExercises.length > 0 && selectedTechniques.length > 0 && (
        <ButtonList type="button" onClick={handleAddToTraining}>
          Adicionar treino
        </ButtonList>
      )}
    </ContainerDataFilter>
  );
}

const ContainerDataFilter = styled.div`
  height: 100vh;
`;

const ContainerMainFilter = styled.div`
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const ContainerFilter = styled.div`
  width: 250px;
  margin: 10px 20px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  ul {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonList = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
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
`;
