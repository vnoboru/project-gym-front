import { useContext, useState } from "react";
import { toast } from "react-toastify";
import ExerciseContext from "../../contexts/ExerciseContext";
import TechniqueContext from "../../contexts/TechniqueContext";
import useListExerc from "../../hooks/api/useFilterExercise";
import useListTech from "../../hooks/api/useFilterTechnique";

export default function DataFilter() {
  const { exercisesInfo } = useContext(ExerciseContext);
  const { techniqueInfo } = useContext(TechniqueContext);

  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedNameTechnique, setSelectedNameTechnique] = useState("");

  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedTechniques, setSelectedTechniques] = useState([]);

  const bodyParts = [...new Set(exercisesInfo.map((e) => e.bodyPart))];
  const nameTechniques = [...new Set(techniqueInfo.map((t) => t.nameTechnique))];
  const { filterExerc, getFilterExerc } = useListExerc();
  const { filterTech, getFilterTech } = useListTech();

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
  };

  const handleAddTech = (t) => {
    const alreadySelected = selectedTechniques.some((ex) => ex.id === t.id);
    if (alreadySelected) {
      toast.error("Este exercício já foi selecionado.");
      return;
    }
    setSelectedTechniques((prevTechniques) => [...prevTechniques, t]);
  };

  return (
    <>
      <select value={selectedBodyPart} onChange={(e) => setSelectedBodyPart(e.target.value)}>
        <option>Selecione uma opção</option>
        {bodyParts.map((bodyPart) => (
          <option key={bodyPart}>{bodyPart}</option>
        ))}
      </select>
      <select value={selectedNameTechnique} onChange={(e) => setSelectedNameTechnique(e.target.value)}>
        <option>Selecione uma opção</option>
        {nameTechniques.map((nameTechnique) => (
          <option key={nameTechnique}>{nameTechnique}</option>
        ))}
      </select>
      <button type="button" onClick={handleFilter}>
        Filtrar
      </button>
      {filterExerc && (
        <div>
          <h3>Exercícios:</h3>
          <ul>
            {filterExerc.map((exercise) => (
              <li key={exercise.id}>
                {exercise.nameExerc}
                <button type="button" onClick={() => handleAddExerc(exercise)}>
                  Adicionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {filterTech && (
        <div>
          <h3>Técnicas:</h3>
          <ul>
            {filterTech.map((technique) => (
              <li key={technique.id}>
                {technique.nameTechnique}
                <button type="button" onClick={() => handleAddTech(technique)}>
                  Adicionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
