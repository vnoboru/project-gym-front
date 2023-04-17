import { useState } from "react";
import styled from "styled-components";
import {
  ContainerHeaderTraining,
  ContainerListTraining,
  ContainerTraining,
} from "../../components/DataFilter/stylesFilter";
import NavigatePagesUser from "../../components/NavigatePagesUser";
import useList from "../../hooks/api/useList";

export default function MyPainelPage() {
  const [days, setDays] = useState("");
  const { list, getList } = useList();
  const [selectedTraining, setSelectedTraining] = useState("");

  const handleSubmit = () => {
    getList(days);
    setDays("");
  };

  return (
    <>
      <NavigatePagesUser />
      <ContainerTrainingUser>
        <h1>Selecione número de dias:</h1>
        <input value={days} onChange={(event) => setDays(event.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
        {list !== null && list !== undefined && list.length > 0 ? (
          <>
            <h1>Selecione o treino:</h1>
            <select value={selectedTraining} onChange={(event) => setSelectedTraining(event.target.value)}>
              <option value="">Selecione um treino</option>
              {[...new Set(list.map((d) => d.training.nameTraining))].map((nameTraining) => (
                <option key={nameTraining} value={nameTraining}>
                  {nameTraining}
                </option>
              ))}
            </select>
            <ContainerTraining>
              {selectedTraining && (
                <ContainerHeaderTraining>
                  <li>Exercício</li>
                  <li>Técnica</li>
                  <li>Número de séries</li>
                  <li>Numero de repetições</li>
                </ContainerHeaderTraining>
              )}
              <ContainerListTraining>
                <div>
                  {list.map((d) => {
                    if (d.training.nameTraining === selectedTraining) {
                      return (
                        <ul key={d.id}>
                          <li>{d.exercices.nameExerc}</li>
                          <li>{d.technique.nameTechnique}</li>
                          <li>{d.technique.numberSeries}</li>
                          <li>{d.technique.numberRep}</li>
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </ContainerListTraining>
            </ContainerTraining>
          </>
        ) : null}
      </ContainerTrainingUser>
    </>
  );
}

const ContainerTrainingUser = styled.div`
  h1 {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 700;
  }

  input {
    margin-left: 20px;
    margin-right: 10px;
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    margin-left: 20px;
    margin-top: 10px;
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
    padding: 5px 22px;
    cursor: pointer;
  }

  select {
    margin-left: 20px;
    border: 2px solid #cccccc;
    border-radius: 5px;
    width: 220px;
    height: 30px;
    margin-bottom: 30px;
  }
`;
