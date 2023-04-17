/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import { ContainerHeaderTraining, ContainerListTraining, ContainerTraining } from "../stylesFilter";

export default function DataSelect({ selectedExercises, selectedTechniques, listTraining }) {
  return (
    <ContainerTraining>
      {listTraining && (
        <ContainerHeaderTraining>
          <li>Exercício</li>
          <li>Técnica</li>
          <li>Número de séries</li>
          <li>Numero de repetições</li>
        </ContainerHeaderTraining>
      )}
      <ContainerListTraining>
        <div>
          {selectedExercises.map((e) => (
            <ul key={e.id}>
              <li>{e.nameExerc}</li>
            </ul>
          ))}
        </div>
        <div>
          {selectedTechniques.map((n, index) => (
            <ul key={index}>
              <li>{n.nameTechnique}</li>
              <li> {n.numberSeries}</li>
              <li>{n.numberRep}</li>
            </ul>
          ))}
        </div>
      </ContainerListTraining>
    </ContainerTraining>
  );
}

DataSelect.propTypes = {
  selectedExercises: PropTypes.arrayOf.isRequired,
  selectedTechniques: PropTypes.arrayOf.isRequired,
  listTraining: PropTypes.bool.isRequired,
};
