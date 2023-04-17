/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import styled from "styled-components";

export default function DataSelect({ selectedExercises, selectedTechniques, listTraining }) {
  return (
    <ContainerDataSelect>
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
    </ContainerDataSelect>
  );
}

DataSelect.propTypes = {
  selectedExercises: PropTypes.arrayOf.isRequired,
  selectedTechniques: PropTypes.arrayOf.isRequired,
  listTraining: PropTypes.bool.isRequired,
};

const ContainerDataSelect = styled.div`
  @media (max-width: 1024px) {
    overflow-x: scroll;
    scrollbar-width: none;
    scrollbar-color: transparent;
  }
`;

const ContainerHeaderTraining = styled.ul`
  display: flex;
  margin-left: 20px;
  margin-bottom: -5px;
  width: 1000px;

  li {
    font-size: 18px;
    font-weight: 900;
    width: 230px;
    height: 25px;
    padding-left: 5px;
    padding-top: 10px;
    margin-right: -3px;
    margin-bottom: -3px;
    border: 3px solid #000000;
  }
`;

const ContainerListTraining = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 5px;

  ul {
    display: flex;
  }

  li {
    width: 230px;
    height: 25px;
    margin-right: -3px;
    margin-bottom: -3px;
    padding-left: 5px;
    padding-top: 10px;
    border: 3px solid #000000;
  }
`;
